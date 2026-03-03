"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  FileText, 
  Plus, 
  CalendarDays, 
  Send, 
  History, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  ArrowRight,
  ChevronRight,
  Info
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const leaveHistory = [
  { id: 1, type: "Medical Leave", from: "Sep 12, 2024", to: "Sep 14, 2024", reason: "Viral Fever & Recovery", status: "Approved" },
  { id: 2, type: "Casual Leave", from: "Oct 25, 2024", to: "Oct 26, 2024", reason: "Family Wedding", status: "Pending" },
  { id: 3, type: "Sick Leave", from: "Aug 05, 2024", to: "Aug 06, 2024", reason: "Minor Food Poisoning", status: "Approved" },
];

export default function LeavePage() {
  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-3">
            <FileText className="w-8 h-8 text-indigo-600" />
            Leave Application
          </h1>
          <p className="text-slate-500 mt-1">Submit new leave requests and track your application status.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Request Form */}
        <Card className="border-none shadow-xl shadow-slate-200/50 rounded-3xl bg-white overflow-hidden p-8">
          <CardHeader className="p-0 mb-8">
            <CardTitle className="text-2xl font-bold text-slate-900">New Application</CardTitle>
            <CardDescription>Fill in the details for your child's leave request.</CardDescription>
          </CardHeader>
          <CardContent className="p-0 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="leaveType" className="font-bold text-slate-700">Leave Type</Label>
                <Input id="leaveType" placeholder="e.g. Medical, Casual" className="h-12 rounded-xl border-slate-100 bg-slate-50 focus:border-indigo-600 transition-all" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="emergency" className="font-bold text-slate-700">Contact Number</Label>
                <Input id="emergency" placeholder="+1 234 567 890" className="h-12 rounded-xl border-slate-100 bg-slate-50 focus:border-indigo-600 transition-all" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="font-bold text-slate-700">From Date</Label>
                <div className="relative">
                  <CalendarDays className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                  <Input type="date" className="pl-10 h-12 rounded-xl border-slate-100 bg-slate-50 focus:border-indigo-600 transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <Label className="font-bold text-slate-700">To Date</Label>
                <div className="relative">
                  <CalendarDays className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                  <Input type="date" className="pl-10 h-12 rounded-xl border-slate-100 bg-slate-50 focus:border-indigo-600 transition-all" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="reason" className="font-bold text-slate-700">Reason for Leave</Label>
              <Textarea 
                id="reason" 
                placeholder="Briefly explain the reason for the leave request..." 
                className="min-h-[120px] rounded-xl border-slate-100 bg-slate-50 focus:border-indigo-600 transition-all p-4 resize-none"
              />
            </div>

            <div className="p-4 bg-indigo-50 border border-indigo-100 rounded-2xl flex items-start gap-3">
              <Info className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
              <p className="text-[11px] text-indigo-700 leading-relaxed font-medium uppercase tracking-wider">
                Medical leave for more than 3 days requires a medical certificate to be uploaded or submitted to the school office.
              </p>
            </div>

            <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-black h-14 rounded-2xl text-lg transition-all shadow-lg shadow-indigo-100 group">
              Submit Application
              <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </CardContent>
        </Card>

        {/* History List */}
        <Card className="border-none shadow-xl shadow-slate-200/50 rounded-3xl bg-white overflow-hidden flex flex-col h-full">
          <CardHeader className="flex flex-row items-center justify-between border-b border-slate-50 p-8">
            <div>
              <CardTitle className="text-2xl font-bold text-slate-900">Application History</CardTitle>
              <CardDescription>Status of your previous leave submissions.</CardDescription>
            </div>
            <Button variant="outline" size="icon" className="h-10 w-10 rounded-xl border-slate-100 shadow-sm"><History className="w-5 h-5 text-slate-400" /></Button>
          </CardHeader>
          <CardContent className="p-0 flex-1 divide-y divide-slate-50">
            {leaveHistory.map((leave, i) => (
              <div key={leave.id} className="p-6 hover:bg-slate-50 transition-all cursor-pointer group flex items-start justify-between">
                <div className="flex items-start gap-5">
                  <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110", 
                    leave.status === "Approved" ? "bg-emerald-50 text-emerald-600" : 
                    leave.status === "Pending" ? "bg-amber-50 text-amber-600" : "bg-rose-50 text-rose-600"
                  )}>
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">{leave.type}</h4>
                    <p className="text-xs text-slate-500 mb-4 line-clamp-1">{leave.reason}</p>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5 px-2 py-1 bg-slate-100 rounded-lg">
                        <CalendarDays className="w-3 h-3 text-slate-400" />
                        <span className="text-[10px] font-black text-slate-600">{leave.from}</span>
                      </div>
                      <ArrowRight className="w-3 h-3 text-slate-300" />
                      <div className="flex items-center gap-1.5 px-2 py-1 bg-slate-100 rounded-lg">
                        <CalendarDays className="w-3 h-3 text-slate-400" />
                        <span className="text-[10px] font-black text-slate-600">{leave.to}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-3">
                  <Badge className={cn("rounded-lg font-black text-[9px] uppercase tracking-widest border-none", 
                    leave.status === "Approved" ? "bg-emerald-50 text-emerald-600" : 
                    leave.status === "Pending" ? "bg-amber-50 text-amber-600" : "bg-rose-50 text-rose-600"
                  )}>
                    {leave.status === "Approved" && <CheckCircle2 className="w-3 h-3 mr-1" />}
                    {leave.status === "Pending" && <Clock className="w-3 h-3 mr-1" />}
                    {leave.status === "Rejected" && <XCircle className="w-3 h-3 mr-1" />}
                    {leave.status}
                  </Badge>
                  <Button variant="ghost" size="icon" className="rounded-full text-slate-300 group-hover:text-indigo-600 transition-colors">
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
          <div className="p-4 bg-slate-50/50 border-t border-slate-50">
            <Button variant="ghost" className="w-full text-indigo-600 font-bold text-xs uppercase tracking-widest hover:bg-indigo-50 rounded-xl py-6">
              Load More Records
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}
