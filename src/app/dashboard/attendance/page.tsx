"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  CalendarCheck, 
  ArrowLeft, 
  Download, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  FileText,
  PieChart as PieIcon
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  Legend, 
  Tooltip 
} from "recharts";

const data = [
  { name: "Present", value: 88, color: "#10b981" },
  { name: "Absent", value: 4, color: "#ef4444" },
  { name: "Leave", value: 8, color: "#f59e0b" },
];

const subjects = [
  { name: "Mathematics", present: 22, total: 24, percent: 91 },
  { name: "Physics", present: 20, total: 24, percent: 83 },
  { name: "English Literature", present: 24, total: 24, percent: 100 },
  { name: "Chemistry", present: 18, total: 20, percent: 90 },
  { name: "History", present: 19, total: 20, percent: 95 },
];

export default function AttendancePage() {
  const currentMonth = "October 2024";
  
  // Generating a simple calendar grid for the UI
  const daysInMonth = 31;
  const attendance = Array.from({ length: daysInMonth }, (_, i) => {
    const day = i + 1;
    let status = "present";
    if ([5, 12, 19, 26].includes(day)) status = "weekend";
    else if ([4, 15].includes(day)) status = "absent";
    else if ([22, 23].includes(day)) status = "leave";
    return { day, status };
  });

  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-3">
            <CalendarCheck className="w-8 h-8 text-indigo-600" />
            Attendance Tracking
          </h1>
          <p className="text-slate-500 mt-1">Detailed view of Vikas's monthly and subject-wise attendance.</p>
        </div>
        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl px-6 h-12 shadow-lg shadow-indigo-100 font-bold gap-2">
          <Download className="w-4 h-4" />
          Download Monthly Report
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Calendar View */}
        <Card className="lg:col-span-2 border-none shadow-xl shadow-slate-200/50 rounded-3xl bg-white overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between border-b border-slate-50 pb-6 px-8 pt-8">
            <div className="flex items-center gap-4">
              <Button variant="outline" size="icon" className="h-10 w-10 rounded-xl border-slate-100 shadow-sm"><ChevronLeft className="w-5 h-5" /></Button>
              <h2 className="text-xl font-bold text-slate-900">{currentMonth}</h2>
              <Button variant="outline" size="icon" className="h-10 w-10 rounded-xl border-slate-100 shadow-sm"><ChevronRight className="w-5 h-5" /></Button>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Present</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-500" />
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Absent</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Leave</span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-7 gap-4 text-center mb-4">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                <div key={day} className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{day}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-4">
              {attendance.map((item, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "aspect-square rounded-2xl flex items-center justify-center font-bold text-lg transition-all cursor-pointer hover:scale-105 relative",
                    item.status === "present" ? "bg-emerald-50 text-emerald-700" :
                    item.status === "absent" ? "bg-rose-50 text-rose-700" :
                    item.status === "leave" ? "bg-amber-50 text-amber-700" :
                    item.status === "weekend" ? "bg-slate-50 text-slate-300" : "bg-white border border-slate-100 text-slate-900"
                  )}
                >
                  {item.day}
                  {item.status === "absent" && <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-rose-500" />}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Attendance Summary Ring */}
        <Card className="border-none shadow-xl shadow-slate-200/50 rounded-3xl bg-white overflow-hidden h-full">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-slate-900">Summary</CardTitle>
            <CardDescription>Academic year overall status.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <div className="h-[250px] w-full relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={8}
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-4xl font-black text-slate-900">92%</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Overall</span>
              </div>
            </div>
            
            <div className="w-full space-y-4 mt-4">
              {data.map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-indigo-100 transition-colors cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="font-bold text-slate-700 group-hover:text-indigo-600 transition-colors">{item.name}</span>
                  </div>
                  <span className="font-black text-slate-900">{item.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Subject Breakdown Table */}
      <Card className="border-none shadow-xl shadow-slate-200/50 rounded-3xl bg-white overflow-hidden">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-slate-900">Subject-wise Breakdown</CardTitle>
          <CardDescription>Attendance records filtered by each subject.</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50/50 border-b border-slate-100">
                  <th className="px-8 py-5 text-left text-[11px] font-black text-slate-400 uppercase tracking-widest">Subject</th>
                  <th className="px-8 py-5 text-center text-[11px] font-black text-slate-400 uppercase tracking-widest">Present</th>
                  <th className="px-8 py-5 text-center text-[11px] font-black text-slate-400 uppercase tracking-widest">Total Classes</th>
                  <th className="px-8 py-5 text-right text-[11px] font-black text-slate-400 uppercase tracking-widest">Percentage</th>
                  <th className="px-8 py-5 text-right text-[11px] font-black text-slate-400 uppercase tracking-widest">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {subjects.map((subj, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors group">
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                          <FileText className="w-5 h-5" />
                        </div>
                        <span className="font-bold text-slate-900">{subj.name}</span>
                      </div>
                    </td>
                    <td className="px-8 py-5 text-center font-bold text-slate-700">{subj.present}</td>
                    <td className="px-8 py-5 text-center font-bold text-slate-700">{subj.total}</td>
                    <td className="px-8 py-5 text-right">
                      <div className="flex items-center justify-end gap-3">
                        <div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div 
                            className={cn("h-full transition-all duration-1000", 
                              subj.percent >= 90 ? "bg-emerald-500" : subj.percent >= 80 ? "bg-amber-500" : "bg-rose-500"
                            )} 
                            style={{ width: `${subj.percent}%` }} 
                          />
                        </div>
                        <span className="font-black text-slate-900 min-w-[3ch]">{subj.percent}%</span>
                      </div>
                    </td>
                    <td className="px-8 py-5 text-right">
                      <Badge className={cn("rounded-lg font-black text-[9px] uppercase tracking-widest", 
                        subj.percent >= 90 ? "bg-emerald-50 text-emerald-600 border-none" : "bg-amber-50 text-amber-600 border-none"
                      )}>
                        {subj.percent >= 90 ? "Excellent" : "On Track"}
                      </Badge>
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
