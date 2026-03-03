"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  BookOpen, 
  Search, 
  Filter, 
  Download, 
  Paperclip, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  ChevronRight,
  MoreVertical,
  CalendarDays
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const homeworks = [
  { id: 1, subject: "Mathematics", task: "Quantum Calculus Problems", deadline: "Today, 11:59 PM", teacher: "Dr. Stephen Strange", status: "pending", priority: "high", hasAttachment: true },
  { id: 2, subject: "English Lit", task: "Macbeth Act III Analysis", deadline: "Tomorrow, 02:00 PM", teacher: "Ms. Agatha Harkness", status: "submitted", priority: "medium", hasAttachment: true },
  { id: 3, subject: "Physics", task: "Particle Dynamics Experiment", deadline: "Oct 24, 09:00 AM", teacher: "Dr. Bruce Banner", status: "late", priority: "high", hasAttachment: false },
  { id: 4, subject: "History", task: "Renaissance Art Movements", deadline: "Oct 26, 11:00 AM", teacher: "Mr. Steve Rogers", status: "pending", priority: "low", hasAttachment: true },
];

function HomeworkCard({ hw, i }: { hw: typeof homeworks[number]; i: number }) {
  return (
    <motion.div 
      key={hw.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.1 }}
    >
      <Card className="border-none shadow-xl shadow-slate-200/50 rounded-3xl bg-white overflow-hidden group hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-300">
        <CardContent className="p-0">
          <div className="p-6">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-3">
                <div className={cn("px-3 py-1 rounded-lg font-black text-[9px] uppercase tracking-widest", 
                  hw.priority === "high" ? "bg-rose-50 text-rose-600" : 
                  hw.priority === "medium" ? "bg-amber-50 text-amber-600" : "bg-indigo-50 text-indigo-600"
                )}>
                  {hw.priority} Priority
                </div>
                <Badge variant="outline" className="border-slate-100 rounded-lg font-bold text-[10px] text-slate-500 uppercase px-2 py-0.5">
                  {hw.subject}
                </Badge>
              </div>
              <Button variant="ghost" size="icon" className="rounded-full text-slate-400"><MoreVertical className="w-5 h-5" /></Button>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">{hw.task}</h3>
            <p className="text-sm text-slate-500 line-clamp-2 mb-6 leading-relaxed">
              Complete the detailed study on {hw.task} including all practical exercises and submission of the digital report by the deadline.
            </p>

            <div className="flex items-center justify-between pt-6 border-t border-slate-50">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10 border-2 border-white shadow-sm ring-1 ring-slate-100">
                  <AvatarImage src={`https://i.pravatar.cc/150?u=${hw.teacher}`} />
                  <AvatarFallback>{hw.teacher[0]}</AvatarFallback>
                </Avatar>
                <div className="text-left">
                  <p className="text-xs font-bold text-slate-900 leading-none">{hw.teacher}</p>
                  <p className="text-[10px] text-slate-400 font-medium uppercase mt-1">Subject Teacher</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                {hw.hasAttachment && (
                  <div className="flex items-center gap-1 text-slate-400">
                    <Paperclip className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-bold">PDF</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-slate-400" />
                  <span className="text-[11px] font-bold text-slate-700">{hw.deadline.split(',')[0]}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className={cn("px-6 py-4 flex items-center justify-between border-t border-slate-50", 
            hw.status === "pending" ? "bg-amber-50/30" : 
            hw.status === "submitted" ? "bg-emerald-50/30" : "bg-rose-50/30"
          )}>
            <div className="flex items-center gap-2">
              {hw.status === "pending" && <Clock className="w-4 h-4 text-amber-500" />}
              {hw.status === "submitted" && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
              {hw.status === "late" && <AlertCircle className="w-4 h-4 text-rose-500" />}
              <span className={cn("text-[10px] font-black uppercase tracking-widest", 
                hw.status === "pending" ? "text-amber-600" : 
                hw.status === "submitted" ? "text-emerald-600" : "text-rose-600"
              )}>
                {hw.status}
              </span>
            </div>
            <Button variant="ghost" className="h-8 rounded-lg text-indigo-600 font-black text-[10px] uppercase tracking-widest hover:bg-white hover:shadow-sm">
              View Details <ChevronRight className="w-3.5 h-3.5 ml-1" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function HomeworkPage() {
  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-indigo-600" />
            Homework & Assignments
          </h1>
          <p className="text-slate-500 mt-1">Manage and track all academic tasks assigned to Vikas.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="rounded-xl border-slate-200 h-12 px-6 font-bold gap-2">
            <Filter className="w-4 h-4" />
            Filter
          </Button>
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl h-12 px-6 shadow-lg shadow-indigo-100 font-bold gap-2">
            <Download className="w-4 h-4" />
            Export Schedule
          </Button>
        </div>
      </div>

      <div className="relative">
        <Search className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
        <Input 
          placeholder="Search by subject, teacher, or task name..." 
          className="pl-12 h-12 rounded-2xl border-none shadow-md shadow-slate-100 bg-white focus-visible:ring-indigo-600"
        />
      </div>

      <Tabs defaultValue="all" className="w-full space-y-6">
        <TabsList className="bg-white p-1 rounded-2xl border border-slate-100 shadow-sm h-14 flex items-center justify-start gap-1 w-fit">
          <TabsTrigger value="all" className="rounded-xl px-8 h-12 font-bold data-[state=active]:bg-indigo-600 data-[state=active]:text-white transition-all">All Tasks</TabsTrigger>
          <TabsTrigger value="pending" className="rounded-xl px-8 h-12 font-bold data-[state=active]:bg-indigo-600 data-[state=active]:text-white transition-all">Pending</TabsTrigger>
          <TabsTrigger value="submitted" className="rounded-xl px-8 h-12 font-bold data-[state=active]:bg-indigo-600 data-[state=active]:text-white transition-all">Submitted</TabsTrigger>
          <TabsTrigger value="late" className="rounded-xl px-8 h-12 font-bold data-[state=active]:bg-indigo-600 data-[state=active]:text-white transition-all">Late/Overdue</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 mt-0">
          {homeworks.map((hw, i) => (
            <HomeworkCard key={hw.id} hw={hw} i={i} />
          ))}
        </TabsContent>

        <TabsContent value="pending" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 mt-0">
          {homeworks.filter(hw => hw.status === "pending").map((hw, i) => (
            <HomeworkCard key={hw.id} hw={hw} i={i} />
          ))}
        </TabsContent>

        <TabsContent value="submitted" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 mt-0">
          {homeworks.filter(hw => hw.status === "submitted").map((hw, i) => (
            <HomeworkCard key={hw.id} hw={hw} i={i} />
          ))}
        </TabsContent>

        <TabsContent value="late" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 mt-0">
          {homeworks.filter(hw => hw.status === "late").map((hw, i) => (
            <HomeworkCard key={hw.id} hw={hw} i={i} />
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}
