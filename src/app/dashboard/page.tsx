"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  CalendarCheck, 
  BookOpen, 
  CreditCard, 
  ShieldAlert, 
  HeartPulse, 
  TrendingUp, 
  ArrowUpRight, 
  ArrowDownRight,
  MoreVertical,
  ChevronRight,
  Clock,
  User,
  GraduationCap,
  CalendarDays,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Mock data for charts
const performanceData = [
  { name: "Math", score: 85 },
  { name: "Science", score: 88 },
  { name: "Social", score: 92 },
  { name: "English", score: 90 },
  { name: "Gujarati", score: 94 },
  { name: "Hindi", score: 96 },
];

const attendanceData = [
  { name: "Jan", present: 20, absent: 2 },
  { name: "Feb", present: 18, absent: 4 },
  { name: "Mar", present: 22, absent: 0 },
  { name: "Apr", present: 21, absent: 1 },
];

const subjectData = [
  { name: "Math", value: 95, color: "#6366f1" },
  { name: "Science", value: 88, color: "#8b5cf6" },
  { name: "English", value: 92, color: "#ec4899" },
  { name: "History", value: 85, color: "#f59e0b" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function DashboardPage() {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8 pb-12"
    >
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Parent Dashboard</h1>
          <p className="text-slate-500 mt-1">Welcome back, Mukesh . Here's what's happening with Vikas today.</p>
        </div>
        <div className="flex items-center gap-3 bg-white p-1.5 pr-4 rounded-2xl shadow-sm border border-slate-100">
          <div className="p-2 bg-indigo-50 rounded-xl">
            <User className="w-5 h-5 text-indigo-600" />
          </div>
          <div className="text-sm">
            <p className="font-bold text-slate-900">Vikas Patel</p>
            <p className="text-slate-500 text-[11px] font-medium uppercase tracking-wider">Grade 10-A • ID: 2024098</p>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-300 ml-2" />
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {[
          { label: "Attendance", val: "94%", desc: "+2% from last month", icon: CalendarCheck, color: "blue", trend: "up" },
          { label: "Homework", val: "12/15", desc: "3 pending tasks", icon: BookOpen, color: "violet", trend: "down" },
          { label: "Overall Score", val: "92.4%", desc: "Top 5% in class", icon: GraduationCap, color: "pink", trend: "up" },
          { label: "Fee Status", val: "$4,200", desc: "Paid • Term 2 Due", icon: CreditCard, color: "emerald", trend: "neutral" },
          { label: "Behavior", val: "A+", desc: "Exemplary conduct", icon: ShieldAlert, color: "amber", trend: "up" },
          { label: "Health", val: "Fit", desc: "No active alerts", icon: HeartPulse, color: "rose", trend: "neutral" },
        ].map((card, i) => (
          <motion.div key={i} variants={itemVariants}>
            <Card className="border-none shadow-md shadow-slate-200/50 hover:shadow-xl hover:shadow-indigo-100/40 transition-all duration-300 rounded-2xl overflow-hidden group">
              <CardContent className="p-5">
                <div className="flex justify-between items-start mb-4">
                  <div className={cn("p-2.5 rounded-xl", 
                    card.color === "blue" ? "bg-blue-50 text-blue-600" : 
                    card.color === "violet" ? "bg-violet-50 text-violet-600" : 
                    card.color === "pink" ? "bg-pink-50 text-pink-600" : 
                    card.color === "emerald" ? "bg-emerald-50 text-emerald-600" : 
                    card.color === "amber" ? "bg-amber-50 text-amber-600" : "bg-rose-50 text-rose-600"
                  )}>
                    <card.icon className="w-5 h-5" />
                  </div>
                  {card.trend === "up" && <Badge className="bg-emerald-50 text-emerald-600 border-none shadow-none font-bold text-[10px] uppercase tracking-wider px-1.5 py-0.5"><ArrowUpRight className="w-3 h-3 mr-0.5" /> 4%</Badge>}
                  {card.trend === "down" && <Badge className="bg-rose-50 text-rose-600 border-none shadow-none font-bold text-[10px] uppercase tracking-wider px-1.5 py-0.5"><ArrowDownRight className="w-3 h-3 mr-0.5" /> 2%</Badge>}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900 leading-none mb-1 group-hover:text-indigo-600 transition-colors">{card.val}</h3>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{card.label}</p>
                  <div className="mt-4 pt-4 border-t border-slate-50">
                    <p className="text-[11px] text-slate-500 font-medium flex items-center gap-1">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Main Charts & Lists */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Performance Overview */}
        <motion.div variants={itemVariants} className="lg:col-span-2">
          <Card className="border-none shadow-xl shadow-slate-200/50 rounded-3xl overflow-hidden bg-white">
            <CardHeader className="flex flex-row items-center justify-between pb-8">
              <div>
                <CardTitle className="text-xl font-bold text-slate-900">Academic Performance</CardTitle>
                <CardDescription>Visual trend of Vikas's score across terms.</CardDescription>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="rounded-lg h-8 text-[11px] font-bold uppercase tracking-wider border-slate-100">Weekly</Button>
                <Button variant="secondary" size="sm" className="rounded-lg h-8 text-[11px] font-bold uppercase tracking-wider bg-indigo-50 text-indigo-700 hover:bg-indigo-100">Monthly</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-[350px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={performanceData}>
                    <defs>
                      <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#6366f1" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 600 }}
                      dy={10}
                    />
                    <YAxis 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 600 }}
                      dx={-10}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        borderRadius: '16px', 
                        border: 'none', 
                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                        padding: '12px'
                      }}
                      itemStyle={{ fontWeight: 700, fontSize: '14px', color: '#1e293b' }}
                      labelStyle={{ fontSize: '11px', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px', fontWeight: 600 }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="score" 
                      stroke="#6366f1" 
                      strokeWidth={4}
                      fillOpacity={1} 
                      fill="url(#colorScore)" 
                      animationDuration={2000}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Upcoming Events */}
        <motion.div variants={itemVariants}>
          <Card className="border-none shadow-xl shadow-slate-200/50 rounded-3xl h-full bg-white overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-xl font-bold text-slate-900">Upcoming Events</CardTitle>
                <CardDescription>Academic & Extra-curricular</CardDescription>
              </div>
              <Button variant="ghost" size="icon" className="rounded-full"><MoreVertical className="w-5 h-5 text-slate-400" /></Button>
            </CardHeader>
            <CardContent className="space-y-6">
              {[
                { title: "Parent Teacher Meet", time: "Tomorrow • 10:00 AM", type: "Meeting", color: "indigo" },
                { title: "Math Semester Final", time: "Oct 24 • All Day", type: "Exam", color: "rose" },
                { title: "Inter-School Sports", time: "Oct 28 • 09:00 AM", type: "Event", color: "amber" },
                { title: "Winter Vacation Starts", time: "Dec 15 • All Day", type: "Holiday", color: "emerald" },
              ].map((event, i) => (
                <div key={i} className="flex gap-4 group cursor-pointer">
                  <div className={cn("w-12 h-12 rounded-2xl flex flex-col items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110", 
                    event.color === "indigo" ? "bg-indigo-50 text-indigo-600" : 
                    event.color === "rose" ? "bg-rose-50 text-rose-600" : 
                    event.color === "amber" ? "bg-amber-50 text-amber-600" : "bg-emerald-50 text-emerald-600"
                  )}>
                    <CalendarDays className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors truncate">{event.title}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <p className="text-xs text-slate-500">{event.time}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="h-6 border-slate-100 rounded-lg text-[9px] font-black uppercase tracking-widest">{event.type}</Badge>
                </div>
              ))}
              <Button className="w-full mt-4 bg-slate-900 hover:bg-indigo-600 text-white font-bold h-12 rounded-xl transition-all shadow-lg shadow-slate-200 hover:shadow-indigo-200">
                View Academic Calendar
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Subject Breakdown & Homework */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Subject Mastery */}
        <motion.div variants={itemVariants}>
          <Card className="border-none shadow-xl shadow-slate-200/50 rounded-3xl bg-white overflow-hidden">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-slate-900">Subject-wise Breakdown</CardTitle>
              <CardDescription>Mastery level in core subjects.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {subjectData.map((subj, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: subj.color }} />
                      <span className="text-sm font-bold text-slate-700">{subj.name}</span>
                    </div>
                    <span className="text-sm font-black text-slate-900">{subj.value}%</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-slate-100 overflow-hidden">
                    <div 
                      className={cn(
                        "h-full rounded-full transition-all",
                        subj.name === "Math" ? "bg-indigo-600" : 
                        subj.name === "Science" ? "bg-violet-600" : 
                        subj.name === "English" ? "bg-pink-600" : "bg-amber-500"
                      )}
                      style={{ width: `${subj.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Recent Homework */}
        <motion.div variants={itemVariants}>
          <Card className="border-none shadow-xl shadow-slate-200/50 rounded-3xl bg-white overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-xl font-bold text-slate-900">Pending Homework</CardTitle>
                <CardDescription>Tasks requiring attention.</CardDescription>
              </div>
              <Badge className="bg-rose-50 text-rose-600 border-none px-3 py-1 font-black text-[10px] uppercase tracking-wider">3 Overdue</Badge>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-slate-50">
                {[
                  { subject: "Advanced Physics", task: "Quantum Mechanics Essay", due: "Today, 11:59 PM", status: "high", teacher: "Dr. Elena Gilbert" },
                  { subject: "History", task: "World War II Presentation", due: "Tomorrow, 02:00 PM", status: "medium", teacher: "Mr. Alaric Saltzman" },
                  { subject: "Literature", task: "Poetry Analysis", due: "Oct 22, 09:00 AM", status: "low", teacher: "Ms. Bonnie Bennett" },
                ].map((hw, i) => (
                  <div key={i} className="flex items-center justify-between p-5 hover:bg-slate-50 transition-colors cursor-pointer group">
                    <div className="flex items-center gap-4">
                      <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border-2", 
                        hw.status === "high" ? "border-rose-100 bg-rose-50 text-rose-500" : 
                        hw.status === "medium" ? "border-amber-100 bg-amber-50 text-amber-500" : "border-indigo-100 bg-indigo-50 text-indigo-500"
                      )}>
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900 line-clamp-1">{hw.task}</p>
                        <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                          <span className="font-semibold text-indigo-600">{hw.subject}</span>
                          <span className="w-1 h-1 bg-slate-300 rounded-full" />
                          <span>{hw.due}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <div className="flex -space-x-2">
                        <Avatar className="w-6 h-6 border-2 border-white">
                          <AvatarImage src={``} />
                          <AvatarFallback>MP</AvatarFallback>
                        </Avatar>
                      </div>
                      <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">{hw.teacher.split(' ').pop()}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 bg-slate-50/50">
                <Button variant="ghost" className="w-full text-indigo-600 font-bold text-xs uppercase tracking-widest hover:bg-indigo-50 rounded-xl py-6">
                  View All Assignments <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {styleOverrides()}
    </motion.div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}

function ArrowRight(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function styleOverrides() {
  return (
    <style jsx global>{`
      .recharts-cartesian-grid-horizontal line {
        stroke-opacity: 0.5;
      }
      .recharts-area-path {
        filter: drop-shadow(0 4px 6px rgba(99, 102, 241, 0.2));
      }
      .recharts-tooltip-cursor {
        stroke: #6366f1;
        stroke-width: 1px;
        stroke-dasharray: 4 4;
      }
    `}</style>
  );
}
