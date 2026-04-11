import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RefreshCw, ArrowRightLeft, TrendingUp, Info, Bitcoin } from "lucide-react";
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
                <p className="text-sm font-bold text-secondary">Current Market Rate</p>
                <p className="text-xs text-slate-500">
                  {isLoading ? "Loading rate..." : `1 USD = ${exchangeRate.toFixed(2)} ZMW`}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-200">
              <Info className="h-6 w-6 text-slate-400" />
              <p className="text-xs text-slate-500">
                Rates are indicative and subject to change based on market conditions at the time of transaction.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Standard Converter */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="border-none shadow-xl rounded-[2rem] overflow-hidden h-full">
                <CardHeader className="bg-secondary text-white p-6">
                  <CardTitle className="text-xl">Currency Converter</CardTitle>
                  <CardDescription className="text-white/60">ZMW ↔ USD Exchange</CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="amount" className="text-sm font-bold text-secondary">Amount in {fromCurrency}</Label>
                      <div className="relative">
                        <Input
                          id="amount"
                          type="number"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          className="h-12 text-lg pl-4 pr-16 rounded-xl border-slate-200 focus:ring-primary"
                          placeholder="0.00"
                        />
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 font-bold text-slate-400">
                          {fromCurrency}
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center py-1">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={toggleCurrency}
                        className="h-10 w-10 rounded-full border-primary/20 text-primary hover:bg-primary hover:text-white transition-all shadow-md"
                      >
                        <ArrowRightLeft className="h-5 w-5" />
                      </Button>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-sm font-bold text-secondary">Converted Amount ({fromCurrency === "ZMW" ? "USD" : "ZMW"})</Label>
                      <div className="h-12 bg-slate-50 rounded-xl border border-slate-200 flex items-center px-4 justify-between">
                        <span className="text-xl font-bold text-secondary">
                          {result.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </span>
                        <span className="font-bold text-primary">
                          {fromCurrency === "ZMW" ? "USD" : "ZMW"}
                        </span>
                      </div>
                    </div>
                  </div>

                  <Button
                    render={
                      <a 
                        href={`https://wa.me/260974136458?text=${encodeURIComponent(
                          `Hello Clickspay, I would like to transact. I converted ${amount} ${fromCurrency} to ${result.toFixed(2)} ${fromCurrency === "ZMW" ? "USD" : "ZMW"}.`
                        )}`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                      />
                    }
                    nativeButton={false}
                    className="w-full h-12 text-base font-bold bg-primary hover:bg-primary/90 rounded-xl"
                  >
                    Transact Now <ArrowRightLeft className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* USDT Calculator */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="border-none shadow-xl rounded-[2rem] overflow-hidden h-full">
                <CardHeader className="bg-primary text-white p-6">
                  <CardTitle className="text-xl">USDT Buy/Sell</CardTitle>
                  <CardDescription className="text-white/80">Crypto ↔ ZMW Exchange</CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="flex p-1 bg-slate-100 rounded-xl">
                    <button
                      onClick={() => setUsdtMode("buy")}
                      className={cn(
                        "flex-1 py-2 text-sm font-bold rounded-lg transition-all",
                        usdtMode === "buy" ? "bg-white text-primary shadow-sm" : "text-slate-500 hover:text-slate-700"
                      )}
                    >
                      Buy USDT
                    </button>
                    <button
                      onClick={() => setUsdtMode("sell")}
                      className={cn(
                        "flex-1 py-2 text-sm font-bold rounded-lg transition-all",
                        usdtMode === "sell" ? "bg-white text-primary shadow-sm" : "text-slate-500 hover:text-slate-700"
                      )}
                    >
                      Sell USDT
                    </button>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="usdtAmount" className="text-sm font-bold text-secondary">
                        Amount in USDT
                      </Label>
                      <div className="relative">
                        <Input
                          id="usdtAmount"
                          type="number"
                          value={usdtAmount}
                          onChange={(e) => setUsdtAmount(e.target.value)}
                          className="h-12 text-lg pl-4 pr-16 rounded-xl border-slate-200 focus:ring-primary"
                          placeholder="0.00"
                        />
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 font-bold text-slate-400">
                          USDT
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-sm font-bold text-secondary">
                        {usdtMode === "buy" ? "You Pay (ZMW)" : "You Receive (ZMW)"}
                      </Label>
                      <div className="h-12 bg-slate-50 rounded-xl border border-slate-200 flex items-center px-4 justify-between">
                        <span className="text-xl font-bold text-secondary">
                          {usdtResult.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </span>
                        <span className="font-bold text-primary">ZMW</span>
                      </div>
                      <p className="text-[10px] text-slate-400 text-center">
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
                    className="w-full h-12 text-base font-bold bg-secondary hover:bg-secondary/90 rounded-xl"
                  >
                    {usdtMode === "buy" ? "Buy Now" : "Sell Now"} <Bitcoin className="ml-2 h-4 w-4" />
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
