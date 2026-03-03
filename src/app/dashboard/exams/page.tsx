"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  FileCheck, 
  Download, 
  TrendingUp, 
  Award, 
  CheckCircle2, 
  ChevronRight, 
  Search,
  BookOpen,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
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

const examResults = [
  { subject: "Mathematics", marks: 95, total: 100, grade: "A+", status: "Approved", color: "#6366f1", trend: "up" },
  { subject: "Advanced Physics", marks: 88, total: 100, grade: "A", status: "Approved", color: "#8b5cf6", trend: "up" },
  { subject: "English Literature", marks: 92, total: 100, grade: "A+", status: "Locked", color: "#ec4899", trend: "down" },
  { subject: "Chemistry", marks: 85, total: 100, grade: "A-", status: "Approved", color: "#f59e0b", trend: "up" },
  { subject: "Modern History", marks: 78, total: 100, grade: "B+", status: "Approved", color: "#10b981", trend: "down" },
  { subject: "Computer Science", marks: 98, total: 100, grade: "A+", status: "Locked", color: "#3b82f6", trend: "up" },
];

export default function ExamsPage() {
  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-3">
            <FileCheck className="w-8 h-8 text-indigo-600" />
            Exams & Results
          </h1>
          <p className="text-slate-500 mt-1">Academic performance analysis and report card history.</p>
        </div>
        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl h-12 px-6 shadow-lg shadow-indigo-100 font-bold gap-2">
          <Download className="w-4 h-4" />
          Download Report Card
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Performance Graph */}
        <Card className="lg:col-span-2 border-none shadow-xl shadow-slate-200/50 rounded-3xl bg-white overflow-hidden">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-slate-900">Performance Visualization</CardTitle>
            <CardDescription>Subject-wise marks distribution for the current term.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={examResults}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis 
                    dataKey="subject" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 700 }}
                    dy={10}
                    interval={0}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 600 }}
                    dx={-10}
                  />
                  <Tooltip 
                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', padding: '12px' }}
                    itemStyle={{ fontWeight: 800, fontSize: '14px' }}
                    labelStyle={{ fontSize: '10px', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px', fontWeight: 600 }}
                  />
                  <Bar dataKey="marks" radius={[6, 6, 0, 0]} barSize={40}>
                    {examResults.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* GPA & Rank Card */}
        <Card className="border-none shadow-xl shadow-slate-200/50 rounded-3xl bg-indigo-600 text-white overflow-hidden relative group">
          <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700" />
          <CardHeader className="relative z-10">
            <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl w-fit mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold">Academic Standing</CardTitle>
            <CardDescription className="text-indigo-100">Term 2 - Grade 10-A</CardDescription>
          </CardHeader>
          <CardContent className="relative z-10 space-y-8">
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-indigo-200 mb-2">Cumulative GPA</p>
              <h2 className="text-6xl font-black">3.85<span className="text-2xl font-medium opacity-60">/4.0</span></h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl">
                <p className="text-[9px] font-black uppercase tracking-widest text-indigo-200 mb-1">Class Rank</p>
                <p className="text-xl font-bold">04<span className="text-xs font-medium opacity-60 ml-1">of 32</span></p>
              </div>
              <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl">
                <p className="text-[9px] font-black uppercase tracking-widest text-indigo-200 mb-1">Overall %</p>
                <p className="text-xl font-bold">92.4%</p>
              </div>
            </div>
            <Button className="w-full bg-white text-indigo-600 hover:bg-indigo-50 font-black h-12 rounded-xl text-xs uppercase tracking-widest">
              View Detailed Analytics
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Results Table */}
      <Card className="border-none shadow-xl shadow-slate-200/50 rounded-3xl bg-white overflow-hidden">
        <CardHeader className="border-b border-slate-50 flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-xl font-bold text-slate-900">Examination Results</CardTitle>
            <CardDescription>Subject-wise marks breakdown and grade allocation.</CardDescription>
          </div>
          <div className="flex gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
              <Input placeholder="Search subject..." className="pl-9 h-9 w-48 rounded-xl border-slate-100 text-xs" />
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50/50">
                  <th className="px-8 py-5 text-left text-[11px] font-black text-slate-400 uppercase tracking-widest">Subject</th>
                  <th className="px-8 py-5 text-center text-[11px] font-black text-slate-400 uppercase tracking-widest">Marks (Max 100)</th>
                  <th className="px-8 py-5 text-center text-[11px] font-black text-slate-400 uppercase tracking-widest">Trend</th>
                  <th className="px-8 py-5 text-center text-[11px] font-black text-slate-400 uppercase tracking-widest">Grade</th>
                  <th className="px-8 py-5 text-right text-[11px] font-black text-slate-400 uppercase tracking-widest">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {examResults.map((result, i) => (
                  <tr key={i} className="hover:bg-slate-50/80 transition-all cursor-pointer group">
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-500 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                          <BookOpen className="w-5 h-5" />
                        </div>
                        <span className="font-bold text-slate-900">{result.subject}</span>
                      </div>
                    </td>
                    <td className="px-8 py-5 text-center">
                      <div className="flex flex-col items-center gap-1.5">
                        <span className="font-black text-slate-900 text-lg">{result.marks}</span>
                        <div className="w-24 h-1 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-indigo-500 transition-all" style={{ width: `${result.marks}%`, backgroundColor: result.color }} />
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-5 text-center">
                      {result.trend === "up" ? (
                        <div className="inline-flex items-center gap-1 px-2 py-1 bg-emerald-50 text-emerald-600 rounded-lg">
                          <ArrowUpRight className="w-3.5 h-3.5" />
                          <span className="text-[10px] font-black">Improved</span>
                        </div>
                      ) : (
                        <div className="inline-flex items-center gap-1 px-2 py-1 bg-rose-50 text-rose-600 rounded-lg">
                          <ArrowDownRight className="w-3.5 h-3.5" />
                          <span className="text-[10px] font-black">Decreased</span>
                        </div>
                      )}
                    </td>
                    <td className="px-8 py-5 text-center">
                      <span className={cn("inline-flex items-center justify-center w-10 h-10 rounded-2xl font-black text-sm", 
                        result.grade.includes('A') ? "bg-emerald-50 text-emerald-600" : 
                        result.grade.includes('B') ? "bg-indigo-50 text-indigo-600" : "bg-rose-50 text-rose-600"
                      )}>
                        {result.grade}
                      </span>
                    </td>
                    <td className="px-8 py-5 text-right">
                      <Badge className={cn("rounded-lg font-black text-[9px] uppercase tracking-widest border-none", 
                        result.status === "Approved" ? "bg-emerald-50 text-emerald-600" : "bg-slate-100 text-slate-400"
                      )}>
                        {result.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-slate-50/50 border-t border-slate-50">
            <Button variant="ghost" className="w-full text-indigo-600 font-bold text-xs uppercase tracking-widest hover:bg-indigo-50 rounded-xl py-6">
              View Historical Performance Charts <TrendingUp className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}
