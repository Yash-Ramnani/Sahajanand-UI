"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  CreditCard, 
  Download, 
  TrendingUp, 
  CheckCircle2, 
  AlertCircle, 
  ChevronRight, 
  Clock, 
  FileText,
  DollarSign,
  Wallet,
  Receipt,
  ArrowUpRight,
  Plus
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const feeInstallments = [
  { id: 1, type: "Tuition Fee", term: "Term 1", amount: 15000, status: "Paid", date: "June 15, 2025", transactionId: "TXN-902341" },
  { id: 2, type: "Additional Fee", term: "Term 1", amount: 2000, status: "Paid", date: "June 15, 2025", transactionId: "TXN-902342" },
  { id: 3, type: "Tuition Fee", term: "Term 2", amount: 15000, status: "Pending", date: "Dec 15, 2025", transactionId: "N/A" },
  { id: 4, type: "Activity Fee", term: "Annual", amount: 500, status: "Overdue", date: "Jan 01, 2026", transactionId: "N/A" },
];

export default function FeesPage() {
  const totalDue = 15000;
  const totalPaid = 15000;
  const progress = (totalPaid / (totalPaid + totalDue)) * 100;

  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-3">
            <CreditCard className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600" />
            Fees & Payments
          </h1>
          <p className="text-slate-500 mt-1">Manage school tuition, additional, and activity fees securely.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button variant="outline" className="rounded-xl border-slate-200 h-10 sm:h-12 px-4 sm:px-6 font-bold gap-2 text-sm">
            <Receipt className="w-4 h-4" />
            Tax Statements
          </Button>
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl h-10 sm:h-12 px-4 sm:px-6 shadow-lg shadow-indigo-100 font-bold gap-2 group transition-all text-sm">
            <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform" />
            Pay Now
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {/* Fee Breakdown Card */}
        <Card className="lg:col-span-2 border-none shadow-xl shadow-slate-200/50 rounded-3xl bg-white overflow-hidden">
          <CardHeader className="p-4 sm:p-6 lg:p-8 pb-0">
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-xl font-bold text-slate-900">Annual Fee Progress</CardTitle>
                <CardDescription>Academic Year 2025-26</CardDescription>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Total Outstanding</p>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">₹{totalDue.toLocaleString()}</h2>
              </div>
            </div>
            <div className="mt-8 space-y-3">
              <div className="flex justify-between items-end">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Payment Completion</span>
                <span className="text-sm font-black text-indigo-600">{Math.round(progress)}% Paid</span>
              </div>
              <div className="h-3 rounded-full bg-slate-100 overflow-hidden">
                <div className="h-full bg-indigo-600" style={{ width: `${progress}%` }} />
              </div>
              <div className="flex justify-between pt-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-indigo-600" />
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Paid: ₹{totalPaid.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-slate-200" />
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Remaining: ₹{totalDue.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-4 sm:p-6 lg:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-4 sm:pt-8 border-t border-slate-50 mt-4 sm:mt-8">
              <div className="p-5 bg-emerald-50 rounded-2xl border border-emerald-100 group hover:scale-105 transition-transform cursor-pointer">
                <div className="p-2 bg-emerald-500 rounded-lg w-fit text-white mb-4">
                  <DollarSign className="w-4 h-4" />
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest text-emerald-600 mb-1">Tuition Fees</p>
                <p className="text-xl font-bold text-emerald-900">₹30,000</p>
                <p className="text-[10px] text-emerald-600/70 font-medium mt-1 uppercase">50% Settled</p>
              </div>
              <div className="p-5 bg-indigo-50 rounded-2xl border border-indigo-100 group hover:scale-105 transition-transform cursor-pointer">
                <div className="p-2 bg-indigo-500 rounded-lg w-fit text-white mb-4">
                  <Wallet className="w-4 h-4" />
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest text-indigo-600 mb-1">Additional</p>
                <p className="text-xl font-bold text-indigo-900">₹2,000</p>
                <p className="text-[10px] text-indigo-600/70 font-medium mt-1 uppercase">100% Settled</p>
              </div>
              <div className="p-5 bg-amber-50 rounded-2xl border border-amber-100 group hover:scale-105 transition-transform cursor-pointer">
                <div className="p-2 bg-amber-500 rounded-lg w-fit text-white mb-4">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest text-amber-600 mb-1">Activities</p>
                <p className="text-xl font-bold text-amber-900">₹500</p>
                <p className="text-[10px] text-amber-600/70 font-medium mt-1 uppercase">Pending</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions / Payment Methods */}
        <Card className="border-none shadow-xl shadow-slate-200/50 rounded-3xl bg-slate-900 text-white overflow-hidden flex flex-col h-full">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Manage Wallet</CardTitle>
            <CardDescription className="text-slate-400">Linked payment methods for auto-pay.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 space-y-6">
            <div className="p-5 bg-white/5 border border-white/10 rounded-2xl relative overflow-hidden group hover:bg-white/10 transition-colors cursor-pointer">
              <div className="flex justify-between items-start relative z-10">
                <div className="w-10 h-10 bg-indigo-500 rounded-xl flex items-center justify-center">
                  <CreditCard className="w-5 h-5" />
                </div>
                <Badge variant="outline" className="border-white/20 text-white font-black text-[9px] uppercase tracking-widest px-2 py-0.5">Primary</Badge>
              </div>
              <div className="mt-8 relative z-10">
                <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">Card Number</p>
                <p className="text-lg font-bold tracking-widest">•••• •••• •••• 8942</p>
              </div>
              <div className="absolute top-[-20%] right-[-20%] w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
            </div>

            <Button className="w-full bg-white text-slate-900 hover:bg-indigo-50 font-black h-12 rounded-xl text-xs uppercase tracking-widest gap-2">
              <Plus className="w-4 h-4" /> Add Payment Method
            </Button>

            <div className="pt-6 border-t border-white/5 space-y-4">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Upcoming Auto-pays</p>
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold">Term 2 Tuition</p>
                    <p className="text-[9px] text-slate-500 font-medium">Dec 15, 2025</p>
                  </div>
                </div>
                <span className="text-sm font-black">₹15,000</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Payment History */}
      <Card className="border-none shadow-xl shadow-slate-200/50 rounded-3xl bg-white overflow-hidden">
        <CardHeader className="border-b border-slate-50 flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-xl font-bold text-slate-900">Transaction History</CardTitle>
            <CardDescription>Records of all previous and pending payments.</CardDescription>
          </div>
          <Button variant="ghost" className="text-indigo-600 font-black text-[10px] uppercase tracking-widest gap-1 hover:bg-indigo-50 h-8 rounded-lg px-3">
            View All <ChevronRight className="w-3 h-3" />
          </Button>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50/50">
                  <th className="px-3 sm:px-6 lg:px-8 py-3 sm:py-5 text-left text-[10px] sm:text-[11px] font-black text-slate-400 uppercase tracking-widest">Description</th>
                  <th className="px-3 sm:px-6 lg:px-8 py-3 sm:py-5 text-center text-[10px] sm:text-[11px] font-black text-slate-400 uppercase tracking-widest">Amount</th>
                  <th className="px-3 sm:px-6 lg:px-8 py-3 sm:py-5 text-center text-[10px] sm:text-[11px] font-black text-slate-400 uppercase tracking-widest hidden md:table-cell">Transaction ID</th>
                  <th className="px-3 sm:px-6 lg:px-8 py-3 sm:py-5 text-center text-[10px] sm:text-[11px] font-black text-slate-400 uppercase tracking-widest hidden sm:table-cell">Date</th>
                  <th className="px-3 sm:px-6 lg:px-8 py-3 sm:py-5 text-right text-[10px] sm:text-[11px] font-black text-slate-400 uppercase tracking-widest">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {feeInstallments.map((inst, i) => (
                  <tr key={i} className="hover:bg-slate-50/80 transition-all cursor-pointer group">
                    <td className="px-3 sm:px-6 lg:px-8 py-3 sm:py-5">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center transition-colors", 
                          inst.status === "Paid" ? "bg-emerald-50 text-emerald-600" : 
                          inst.status === "Overdue" ? "bg-rose-50 text-rose-600" : "bg-amber-50 text-amber-600"
                        )}>
                          <FileText className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-bold text-slate-900">{inst.type}</p>
                          <p className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">{inst.term}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-3 sm:px-6 lg:px-8 py-3 sm:py-5 text-center">
                      <span className="font-black text-slate-900 text-base sm:text-lg">₹{inst.amount.toLocaleString()}</span>
                    </td>
                    <td className="px-3 sm:px-6 lg:px-8 py-3 sm:py-5 text-center hidden md:table-cell">
                      <code className="text-[11px] bg-slate-100 px-2 py-1 rounded-md text-slate-500 font-mono">{inst.transactionId}</code>
                    </td>
                    <td className="px-3 sm:px-6 lg:px-8 py-3 sm:py-5 text-center hidden sm:table-cell">
                      <span className="text-xs font-bold text-slate-500">{inst.date}</span>
                    </td>
                    <td className="px-3 sm:px-6 lg:px-8 py-3 sm:py-5 text-right">
                      <div className="flex items-center justify-end gap-2">
                        {inst.status === "Paid" ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : <AlertCircle className="w-4 h-4 text-rose-500" />}
                        <Badge className={cn("rounded-lg font-black text-[9px] uppercase tracking-widest border-none", 
                          inst.status === "Paid" ? "bg-emerald-50 text-emerald-600" : 
                          inst.status === "Overdue" ? "bg-rose-50 text-rose-600" : "bg-amber-50 text-amber-600"
                        )}>
                          {inst.status}
                        </Badge>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}
