"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ShieldAlert, 
  TrendingUp, 
  MessageSquare, 
  ThumbsUp, 
  ThumbsDown, 
  Star, 
  CalendarDays, 
  Search, 
  Filter,
  CheckCircle2,
  AlertCircle,
  MoreVertical,
  ChevronRight
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from "recharts";

const behaviorData = [
  { name: "Jan", score: 95 },
  { name: "Feb", score: 88 },
  { name: "Mar", score: 92 },
  { name: "Apr", score: 98 },
  { name: "May", score: 90 },
  { name: "Jun", score: 96 },
];

const behaviorReports = [
  { id: 1, type: "Positive", title: "Peer Assistance", date: "Oct 12, 2024", remark: "Vikas stayed back to help a struggling student with Calculus homework. Exemplary empathy.", teacher: "Dr. Stephen Strange", score: +10 },
  { id: 2, type: "Positive", title: "Leadership Role", date: "Sep 28, 2024", remark: "Demonstrated excellent coordination during the Science Fair as team lead.", teacher: "Ms. Agatha Harkness", score: +15 },
  { id: 3, type: "Negative", title: "Minor Tardiness", date: "Sep 15, 2024", remark: "Arrived late for the first period three times in a week without prior notice.", teacher: "Mr. Steve Rogers", score: -5 },
  { id: 4, type: "Positive", title: "Sportsmanship", date: "Aug 22, 2024", remark: "Congratulated the opposing team despite a narrow loss. True spirit of competition.", teacher: "Mr. Bucky Barnes", score: +5 },
];

export default function BehaviorPage() {
  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-3">
            <ShieldAlert className="w-6 h-6 sm:w-8 sm:h-8 text-amber-500" />
            Behavior & Discipline
          </h1>
          <p className="text-slate-500 mt-1">Detailed report of conduct, achievements, and disciplinary records.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="rounded-xl border-slate-200 h-12 px-6 font-bold gap-2">
            <MessageSquare className="w-4 h-4" />
            Contact Counselor
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {/* Behavior Score Card */}
        <Card className="border-none shadow-xl shadow-slate-200/50 rounded-3xl bg-white overflow-hidden p-4 sm:p-6 lg:p-8 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-slate-900">Current Conduct Score</h3>
              <div className="p-2 bg-amber-50 rounded-xl text-amber-600">
                <Star className="w-6 h-6 fill-current" />
              </div>
            </div>
            <div className="flex items-baseline gap-2 mb-4">
              <h2 className="text-5xl sm:text-7xl font-black text-slate-900">92</h2>
              <span className="text-2xl font-bold text-slate-400">/ 100</span>
            </div>
            <Badge className="bg-emerald-50 text-emerald-600 border-none px-4 py-1.5 font-black text-[10px] uppercase tracking-widest mb-8">Exemplary Conduct</Badge>
            
            <div className="space-y-4 pt-8 border-t border-slate-50">
              <div className="flex justify-between items-center">
                <span className="text-sm font-bold text-slate-500">Positive Remarks</span>
                <span className="text-sm font-black text-emerald-600">+42 This Term</span>
              </div>
              <Progress value={85} className="h-2 rounded-full bg-slate-100" indicatorClassName="bg-emerald-500" />
              <div className="flex justify-between items-center">
                <span className="text-sm font-bold text-slate-500">Minor Infractions</span>
                <span className="text-sm font-black text-rose-600">-8 This Term</span>
              </div>
              <Progress value={15} className="h-2 rounded-full bg-slate-100" indicatorClassName="bg-rose-500" />
            </div>
          </div>
          <Button className="w-full mt-10 bg-slate-900 hover:bg-amber-600 text-white font-bold h-12 rounded-xl transition-all shadow-lg shadow-slate-200">
            Download Conduct Certificate
          </Button>
        </Card>

        {/* Monthly Trend Chart */}
        <Card className="lg:col-span-2 border-none shadow-xl shadow-slate-200/50 rounded-3xl bg-white overflow-hidden">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-slate-900">Monthly Behavior Index</CardTitle>
            <CardDescription>Fluctuation of conduct score over the last 6 months.</CardDescription>
          </CardHeader>
          <CardContent>
              <div className="h-[250px] sm:h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={behaviorData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 700 }}
                    dy={10}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 600 }}
                    dx={-10}
                    domain={[0, 100]}
                  />
                  <Tooltip 
                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', padding: '12px' }}
                    itemStyle={{ fontWeight: 800, fontSize: '14px' }}
                    labelStyle={{ fontSize: '10px', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px', fontWeight: 600 }}
                  />
                  <Bar dataKey="score" radius={[8, 8, 8, 8]} barSize={40}>
                    {behaviorData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.score > 90 ? "#10b981" : "#f59e0b"} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Remark Reports */}
      <Card className="border-none shadow-xl shadow-slate-200/50 rounded-3xl bg-white overflow-hidden">
        <CardHeader className="border-b border-slate-50 flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-xl font-bold text-slate-900">Activity Log & Remarks</CardTitle>
            <CardDescription>Records of specific behavior instances reported by teachers.</CardDescription>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="rounded-xl h-10 px-4 font-bold border-slate-100 flex gap-2">
              <Filter className="w-4 h-4" /> Filter
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="divide-y divide-slate-50">
            {behaviorReports.map((report, i) => (
              <div key={report.id} className="p-4 sm:p-6 lg:p-8 hover:bg-slate-50 transition-all cursor-pointer group flex flex-col sm:flex-row items-start justify-between gap-4">
                <div className="flex items-start gap-3 sm:gap-6">
                  <div className={cn("w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center transition-transform group-hover:rotate-12 group-hover:scale-110 flex-shrink-0", 
                    report.type === "Positive" ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"
                  )}>
                    {report.type === "Positive" ? <ThumbsUp className="w-5 h-5 sm:w-7 sm:h-7" /> : <ThumbsDown className="w-5 h-5 sm:w-7 sm:h-7" />}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-base sm:text-xl font-bold text-slate-900">{report.title}</h3>
                      <Badge className={cn("rounded-lg font-black text-[9px] uppercase tracking-widest border-none", 
                        report.type === "Positive" ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"
                      )}>
                        {report.score > 0 ? `+${report.score}` : report.score} Points
                      </Badge>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed max-w-2xl mb-3 sm:mb-4 italic line-clamp-2 sm:line-clamp-none">
                      "{report.remark}"
                    </p>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                      <div className="flex items-center gap-2">
                        <CalendarDays className="w-4 h-4 text-slate-400" />
                        <span className="text-xs font-bold text-slate-500">{report.date}</span>
                      </div>
                      <span className="w-1.5 h-1.5 bg-slate-200 rounded-full" />
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-500">Reported by: </span>
                        <span className="text-xs font-black text-indigo-600">{report.teacher}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="rounded-full text-slate-300 group-hover:text-indigo-600 transition-colors">
                  <ChevronRight className="w-6 h-6" />
                </Button>
              </div>
            ))}
          </div>
          <div className="p-4 bg-slate-50/50 border-t border-slate-50 text-center">
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">End of records for current term</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}
