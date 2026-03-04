"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  CalendarDays, 
  ChevronLeft, 
  ChevronRight, 
  Search, 
  Filter, 
  Download, 
  Clock, 
  Info, 
  MapPin, 
  BookOpen, 
  Trophy, 
  GraduationCap, 
  Users,
  Star,
  Plus
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const events = [
  { id: 1, title: "Parent Teacher Meeting", date: "Oct 18, 2024", time: "10:00 AM", type: "Meeting", color: "indigo" },
  { id: 2, title: "Math Semester Final", date: "Oct 24, 2024", time: "All Day", type: "Exam", color: "rose" },
  { id: 3, title: "Science Fair Registration", date: "Oct 22, 2024", time: "09:00 AM", type: "Academic", color: "amber" },
  { id: 4, title: "Inter-School Football", date: "Oct 28, 2024", time: "03:00 PM", type: "Sports", color: "emerald" },
];

export default function CalendarPage() {
  const currentMonth = "October 2024";
  const daysInMonth = 31;
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-3">
            <CalendarDays className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600" />
            Academic Calendar
          </h1>
          <p className="text-slate-500 mt-1">Full schedule of school events, holidays, and academic sessions.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button variant="outline" className="rounded-xl border-slate-200 h-10 sm:h-12 px-4 sm:px-6 font-bold gap-2 text-sm">
            <Download className="w-4 h-4" />
            Export iCal
          </Button>
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl h-10 sm:h-12 px-4 sm:px-6 shadow-lg shadow-indigo-100 font-bold gap-2 text-sm">
            <Plus className="w-4 h-4" />
            Add Event
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {/* Calendar Main Grid */}
        <Card className="lg:col-span-3 border-none shadow-xl shadow-slate-200/50 rounded-3xl bg-white overflow-hidden">
          <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-50 pb-4 sm:pb-6 px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 lg:pt-8 gap-3">
            <div className="flex items-center gap-4">
              <Button variant="outline" size="icon" className="h-10 w-10 rounded-xl border-slate-100 shadow-sm"><ChevronLeft className="w-5 h-5" /></Button>
              <h2 className="text-xl font-bold text-slate-900">{currentMonth}</h2>
              <Button variant="outline" size="icon" className="h-10 w-10 rounded-xl border-slate-100 shadow-sm"><ChevronRight className="w-5 h-5" /></Button>
            </div>
            <div className="hidden md:flex gap-4">
              <Button variant="secondary" size="sm" className="rounded-lg h-8 text-[11px] font-bold uppercase tracking-wider bg-indigo-50 text-indigo-700 hover:bg-indigo-100">Month</Button>
              <Button variant="outline" size="sm" className="rounded-lg h-8 text-[11px] font-bold uppercase tracking-wider border-slate-100">Week</Button>
              <Button variant="outline" size="sm" className="rounded-lg h-8 text-[11px] font-bold uppercase tracking-wider border-slate-100">Day</Button>
            </div>
          </CardHeader>
          <CardContent className="p-2 sm:p-4 lg:p-8">
            <div className="grid grid-cols-7 gap-1 sm:gap-2 lg:gap-4 text-center mb-3 sm:mb-6">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                <div key={day} className="text-[8px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest">{day}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1 sm:gap-2 lg:gap-4 auto-rows-[60px] sm:auto-rows-[90px] lg:auto-rows-[120px]">
              {days.map((day, i) => (
                <div key={i} className="bg-white border border-slate-100 rounded-lg sm:rounded-2xl p-1 sm:p-2 group hover:shadow-xl hover:shadow-indigo-100/40 hover:border-indigo-100 transition-all cursor-pointer overflow-hidden flex flex-col">
                  <span className="text-[10px] sm:text-sm font-bold text-slate-400 mb-0.5 sm:mb-1 group-hover:text-indigo-600 transition-colors">{day}</span>
                  {day === 18 && (
                    <div className="bg-indigo-50 border-l-2 border-indigo-500 p-1.5 rounded-lg mb-1 truncate">
                      <p className="text-[9px] font-black text-indigo-700 uppercase leading-none mb-1">PTM</p>
                      <p className="text-[8px] text-indigo-500 font-medium truncate">10:00 AM</p>
                    </div>
                  )}
                  {day === 24 && (
                    <div className="bg-rose-50 border-l-2 border-rose-500 p-1.5 rounded-lg truncate">
                      <p className="text-[9px] font-black text-rose-700 uppercase leading-none mb-1">Math Exam</p>
                      <p className="text-[8px] text-rose-500 font-medium truncate">All Day</p>
                    </div>
                  )}
                  {day === 28 && (
                    <div className="bg-emerald-50 border-l-2 border-emerald-500 p-1.5 rounded-lg truncate">
                      <p className="text-[9px] font-black text-emerald-700 uppercase leading-none mb-1">Football</p>
                      <p className="text-[8px] text-emerald-500 font-medium truncate">03:00 PM</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Legend & Summary */}
        <div className="space-y-6">
          <Card className="border-none shadow-xl shadow-slate-200/50 rounded-3xl bg-white overflow-hidden p-6">
            <CardTitle className="text-xl font-bold text-slate-900 mb-6">Event Legend</CardTitle>
            <div className="space-y-4">
              {[
                { label: "Meeting", color: "indigo" },
                { label: "Examination", color: "rose" },
                { label: "Holiday", color: "amber" },
                { label: "Sports", color: "emerald" },
                { label: "Academic", color: "violet" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={cn("w-3 h-3 rounded-full", 
                    item.color === "indigo" ? "bg-indigo-500" : 
                    item.color === "rose" ? "bg-rose-500" : 
                    item.color === "amber" ? "bg-amber-500" : 
                    item.color === "emerald" ? "bg-emerald-500" : "bg-violet-500"
                  )} />
                  <span className="text-xs font-black text-slate-500 uppercase tracking-widest">{item.label}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="border-none shadow-xl shadow-slate-200/50 rounded-3xl bg-indigo-600 text-white overflow-hidden p-8 flex flex-col justify-between group">
            <div className="absolute top-[-20%] right-[-20%] w-48 h-48 bg-white/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700" />
            <div className="relative z-10 mb-8">
              <h3 className="text-xl font-bold mb-2">Next Holiday</h3>
              <p className="text-indigo-100 text-sm mb-4">Winter Vacation Starts in:</p>
              <div className="flex gap-4">
                <div className="text-center">
                  <p className="text-4xl font-black">62</p>
                  <p className="text-[9px] font-black uppercase tracking-widest opacity-60">Days</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-black">15</p>
                  <p className="text-[9px] font-black uppercase tracking-widest opacity-60">Hrs</p>
                </div>
              </div>
            </div>
            <Button className="w-full bg-white text-indigo-600 hover:bg-indigo-50 font-black h-12 rounded-xl text-xs uppercase tracking-widest relative z-10">
              Full Holiday List
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}
