import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RefreshCw, ArrowRightLeft, TrendingUp, Info, Wallet } from "lucide-react";
import { cn } from "@/lib/utils";

const FALLBACK_RATE = 25.45;

export default function Calculator() {
  const [amount, setAmount] = useState<string>("100");
  const [fromCurrency, setFromCurrency] = useState<"ZMW" | "USD">("ZMW");
  const [result, setResult] = useState<number>(0);
  const [exchangeRate, setExchangeRate] = useState<number>(FALLBACK_RATE);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchRate = async () => {
      try {
        const response = await fetch("https://open.er-api.com/v6/latest/USD");
        const data = await response.json();
        if (data && data.rates && data.rates.ZMW) {
          setExchangeRate(data.rates.ZMW);
        }
      } catch (error) {
        console.error("Error fetching exchange rate:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRate();
    const interval = setInterval(fetchRate, 5 * 60 * 1000); // Update every 5 minutes

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const val = parseFloat(amount) || 0;
    if (fromCurrency === "ZMW") {
      setResult(val / exchangeRate);
    } else {
      setResult(val * exchangeRate);
    }
  }, [amount, fromCurrency, exchangeRate]);

  const [usdtAmount, setUsdtAmount] = useState<string>("100");
  const [usdtMode, setUsdtMode] = useState<"buy" | "sell">("buy");
  const [usdtResult, setUsdtResult] = useState<number>(0);

  const [derivAmount, setDerivAmount] = useState<string>("100");
  const [derivMode, setDerivMode] = useState<"deposit" | "withdraw">("deposit");
  const [derivResult, setDerivResult] = useState<number>(0);

  useEffect(() => {
    const val = parseFloat(usdtAmount) || 0;
    if (usdtMode === "buy") {
      // Buying USDT: User pays more ZMW per USDT
      const buyRate = exchangeRate + 0.70;
      setUsdtResult(val * buyRate);
    } else {
      // Selling USDT: User gets less ZMW per USDT
      const sellRate = exchangeRate - 0.30;
      setUsdtResult(val * sellRate);
    }
  }, [usdtAmount, usdtMode, exchangeRate]);

  useEffect(() => {
    const val = parseFloat(derivAmount) || 0;
    if (derivMode === "deposit") {
      // Deposit: User pays more ZMW per USD
      const depositRate = exchangeRate + 0.70;
      setDerivResult(val * depositRate);
    } else {
      // Withdraw: User gets less ZMW per USD
      const withdrawRate = exchangeRate - 0.30;
      const totalBeforeCommission = val * withdrawRate;
      setDerivResult(totalBeforeCommission * 0.95); // Deduct 5% commission
    }
  }, [derivAmount, derivMode, exchangeRate]);

  const toggleCurrency = () => {
    setFromCurrency(prev => prev === "ZMW" ? "USD" : "ZMW");
  };

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        <div className="lg:col-span-1 space-y-6 lg:sticky lg:top-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              Real-time <span className="text-primary">Currency Converter</span>
            </h1>
            <p className="text-slate-600 text-lg">
              Get accurate conversion rates between Zambian Kwacha (ZMW) and US Dollars (USD). Our rates are updated frequently to ensure you get the best value.
            </p>
          </motion.div>

          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-2xl border border-primary/10">
              <TrendingUp className="h-6 w-6 text-primary" />
              <div>
                <p className="text-sm font-bold text-secondary dark:text-white flex items-center gap-2">
                  Current Market Rate
                  <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 animate-pulse">
                    LIVE
                  </span>
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {isLoading ? "Loading rate..." : `1 USD = ${exchangeRate.toFixed(2)} ZMW`}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700">
              <Info className="h-6 w-6 text-slate-400" />
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Rates are indicative and subject to change based on market conditions at the time of transaction.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Standard Converter */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="border-none shadow-xl rounded-[2rem] overflow-hidden h-full bg-white dark:bg-slate-800">
                <CardHeader className="bg-secondary text-white p-6">
                  <CardTitle className="text-xl">Currency Converter</CardTitle>
                  <CardDescription className="text-white/60">ZMW ↔ USD Exchange</CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="amount" className="text-sm font-bold text-secondary dark:text-slate-300">Amount in {fromCurrency}</Label>
                      <div className="relative">
                        <Input
                          id="amount"
                          type="number"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          className="h-12 text-lg pl-4 pr-16 rounded-xl border-slate-200 dark:border-slate-700 focus:ring-primary bg-white dark:bg-slate-900/50"
                          placeholder="0.00"
                        />
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 font-bold text-slate-400 dark:text-slate-500">
                          {fromCurrency}
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center py-1">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={toggleCurrency}
                        className="h-10 w-10 rounded-full border-primary/20 text-primary hover:bg-primary hover:text-white transition-all shadow-md dark:bg-slate-900 dark:border-slate-700"
                      >
                        <ArrowRightLeft className="h-5 w-5" />
                      </Button>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-sm font-bold text-secondary dark:text-slate-300">Converted Amount ({fromCurrency === "ZMW" ? "USD" : "ZMW"})</Label>
                      <div className="h-12 bg-slate-50 dark:bg-slate-900/80 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center px-4 justify-between">
                        <span className="text-xl font-bold text-secondary dark:text-white">
                          {result.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </span>
                        <span className="font-bold text-primary">
                          {fromCurrency === "ZMW" ? "USD" : "ZMW"}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* USDT Calculator */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="border-none shadow-xl rounded-[2rem] overflow-hidden h-full bg-white dark:bg-slate-800">
                <CardHeader className="bg-primary text-white p-6">
                  <CardTitle className="text-xl">USDT Buy/Sell</CardTitle>
                  <CardDescription className="text-white/80">Crypto ↔ ZMW Exchange</CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="flex p-1 bg-slate-100 dark:bg-slate-900/50 rounded-xl">
                    <button
                      onClick={() => setUsdtMode("buy")}
                      className={cn(
                        "flex-1 py-2 text-sm font-bold rounded-lg transition-all",
                        usdtMode === "buy" ? "bg-white dark:bg-slate-700 text-primary shadow-sm" : "text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                      )}
                    >
                      Buy USDT
                    </button>
                    <button
                      onClick={() => setUsdtMode("sell")}
                      className={cn(
                        "flex-1 py-2 text-sm font-bold rounded-lg transition-all",
                        usdtMode === "sell" ? "bg-white dark:bg-slate-700 text-primary shadow-sm" : "text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                      )}
                    >
                      Sell USDT
                    </button>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="usdtAmount" className="text-sm font-bold text-secondary dark:text-slate-300">
                        Amount in USDT
                      </Label>
                      <div className="relative">
                        <Input
                          id="usdtAmount"
                          type="number"
                          value={usdtAmount}
                          onChange={(e) => setUsdtAmount(e.target.value)}
                          className="h-12 text-lg pl-4 pr-16 rounded-xl border-slate-200 dark:border-slate-700 focus:ring-primary bg-white dark:bg-slate-900/50"
                          placeholder="0.00"
                        />
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 font-bold text-slate-400 dark:text-slate-500">
                          USDT
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-sm font-bold text-secondary dark:text-slate-300">
                        {usdtMode === "buy" ? "You Pay (ZMW)" : "You Receive (ZMW)"}
                      </Label>
                      <div className="h-12 bg-slate-50 dark:bg-slate-900/80 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center px-4 justify-between">
                        <span className="text-xl font-bold text-secondary dark:text-white">
                          {usdtResult.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </span>
                        <span className="font-bold text-primary">ZMW</span>
                      </div>
                      <p className="text-[10px] text-slate-400 dark:text-slate-500 text-center">
                        Rate: 1 USDT = {(exchangeRate + (usdtMode === "buy" ? 0.70 : -0.30)).toFixed(2)} ZMW
                      </p>
                    </div>
                  </div>

                  <Button
                    render={
                      <a 
                        href={`https://wa.me/260974136458?text=${encodeURIComponent(
                          `Hello Clickspay, I would like to ${usdtMode} ${usdtAmount} USDT. The calculated amount is ${usdtResult.toFixed(2)} ZMW.`
                        )}`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                      />
                    }
                    nativeButton={false}
                    className="w-full h-12 text-base font-bold bg-secondary dark:bg-primary hover:bg-secondary/90 dark:hover:bg-primary/90 text-white rounded-xl shadow-lg shadow-secondary/10 dark:shadow-primary/10"
                  >
                    {usdtMode === "buy" ? "Buy Now" : "Sell Now"} 
                    <svg 
                      viewBox="0 0 24 24" 
                      fill="currentColor" 
                      className="ml-2 h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.29 13.58h-2.58v-4.3H7.5V8.71h9v2.57h-3.21v4.3z" />
                    </svg>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Deriv Calculator - Detached */}
          <div className="pt-12 border-t border-slate-100">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-2xl mx-auto"
            >
              <Card className="border-none shadow-xl rounded-[2rem] overflow-hidden bg-white dark:bg-slate-800">
                <CardHeader className="bg-slate-800 dark:bg-slate-900 text-white p-8">
                  <CardTitle className="text-2xl">Deriv Deposit/Withdraw</CardTitle>
                  <CardDescription className="text-white/80 text-lg">Deriv ↔ ZMW Exchange</CardDescription>
                </CardHeader>
                <CardContent className="p-8 space-y-8">
                  <div className="flex p-1 bg-slate-100 dark:bg-slate-900/50 rounded-xl">
                    <button
                      onClick={() => setDerivMode("deposit")}
                      className={cn(
                        "flex-1 py-3 text-sm font-bold rounded-lg transition-all",
                        derivMode === "deposit" ? "bg-white dark:bg-slate-700 text-primary shadow-sm" : "text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                      )}
                    >
                      Deposit
                    </button>
                    <button
                      onClick={() => setDerivMode("withdraw")}
                      className={cn(
                        "flex-1 py-3 text-sm font-bold rounded-lg transition-all",
                        derivMode === "withdraw" ? "bg-white dark:bg-slate-700 text-primary shadow-sm" : "text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                      )}
                    >
                      Withdraw
                    </button>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-3">
                      <Label htmlFor="derivAmount" className="text-base font-bold text-secondary dark:text-slate-300">
                        Amount in USD
                      </Label>
                      <div className="relative">
                        <Input
                          id="derivAmount"
                          type="number"
                          value={derivAmount}
                          onChange={(e) => setDerivAmount(e.target.value)}
                          className="h-14 text-xl pl-4 pr-16 rounded-xl border-slate-200 dark:border-slate-700 focus:ring-primary bg-white dark:bg-slate-900/50"
                          placeholder="0.00"
                        />
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 font-bold text-slate-400 dark:text-slate-500">
                          USD
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label className="text-base font-bold text-secondary dark:text-slate-300">
                        {derivMode === "deposit" ? "You Pay (ZMW)" : "You Receive (ZMW)"}
                      </Label>
                      <div className="h-14 bg-slate-50 dark:bg-slate-900/80 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center px-6 justify-between">
                        <span className="text-2xl font-bold text-secondary dark:text-white">
                          {derivResult.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </span>
                        <span className="font-bold text-primary text-lg">ZMW</span>
                      </div>
                      <p className="text-xs text-slate-400 dark:text-slate-500 text-center">
                        Rate: 1 USD = {(exchangeRate + (derivMode === "deposit" ? 0.70 : -0.30)).toFixed(2)} ZMW
                      </p>
                      {derivMode === "withdraw" && (
                        <p className="text-xs text-amber-600 dark:text-amber-400 font-bold text-center bg-amber-50 dark:bg-amber-900/20 py-2 rounded-lg border border-amber-100 dark:border-amber-900/30">
                          Note: A fixed 5% commission applies to all Deriv withdrawals.
                        </p>
                      )}
                    </div>
                  </div>


                  <Button
                    render={
                      <a 
                        href={`https://wa.me/260974136458?text=${encodeURIComponent(
                          `Hello Clickspay, I would like to ${derivMode} ${derivAmount} USD on Deriv. ${derivMode === "withdraw" ? "After 5% commission, the" : "The"} calculated amount is ${derivResult.toFixed(2)} ZMW.`
                        )}`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                      />
                    }
                    nativeButton={false}
                    className="w-full h-14 text-lg font-bold bg-primary hover:bg-primary/90 rounded-xl shadow-lg shadow-primary/10"
                  >
                    {derivMode === "deposit" ? "Deposit Now" : "Withdraw Now"} <Wallet className="ml-2 h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
