"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Trophy, 
  Search, 
  Filter, 
  ChevronRight, 
  Star, 
  Users, 
  CalendarDays, 
  MapPin, 
  History, 
  TrendingUp, 
  Award, 
  Target
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const sports = [
  { id: 1, name: "Varsity Football", role: "Forward / Captain", performance: 92, status: "Active", coach: "Coach Marcus Flint", nextMatch: "Oct 28 • 03:00 PM", color: "emerald" },
  { id: 2, name: "Swimming Team", role: "Freestyle 100m", performance: 85, status: "Active", coach: "Coach Oliver Wood", nextMatch: "Nov 05 • 09:00 AM", color: "blue" },
  { id: 3, name: "Tennis Club", role: "Singles / Advanced", performance: 78, status: "Seasonal", coach: "Coach Ginny Weasley", nextMatch: "Dec 12 • 10:00 AM", color: "indigo" },
];

const achievements = [
  { id: 1, title: "Best Forward 2024", event: "Inter-School Football", date: "Sep 2024", icon: Trophy, color: "amber" },
  { id: 2, title: "Gold Medalist", event: "Spring Swim Meet", date: "May 2024", icon: Award, color: "blue" },
  { id: 3, title: "MVP Runner-up", event: "District Cup", date: "Feb 2024", icon: Star, color: "rose" },
];

export default function SportsPage() {
  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-3">
            <Trophy className="w-8 h-8 text-emerald-500" />
            Sports & Extra-curricular
          </h1>
          <p className="text-slate-500 mt-1">Track Leo's athletic journey, performance, and upcoming matches.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="rounded-xl border-slate-200 h-12 px-6 font-bold gap-2">
            <History className="w-4 h-4" />
            Match History
          </Button>
          <Button className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl h-12 px-6 shadow-lg shadow-emerald-100 font-bold gap-2 group transition-all">
            Join New Sport
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Enrolled Sports List */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900">Enrolled Sports</h2>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg text-slate-400"><Search className="w-4 h-4" /></Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg text-slate-400"><Filter className="w-4 h-4" /></Button>
            </div>
          </div>
          
          {sports.map((sport, i) => (
            <motion.div 
              key={sport.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="border-none shadow-xl shadow-slate-200/50 rounded-3xl bg-white overflow-hidden group hover:shadow-2xl hover:shadow-emerald-100/40 transition-all duration-300">
                <CardContent className="p-0">
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex items-center gap-4">
                        <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center text-white transition-transform group-hover:scale-110", 
                          sport.color === "emerald" ? "bg-emerald-500" : 
                          sport.color === "blue" ? "bg-blue-500" : "bg-indigo-500"
                        )}>
                          {sport.name.includes('Football') ? <Target className="w-8 h-8" /> : 
                           sport.name.includes('Swimming') ? <TrendingUp className="w-8 h-8" /> : <Trophy className="w-8 h-8" />}
                        </div>
                        <div>
                          <h3 className="text-2xl font-black text-slate-900 mb-1 group-hover:text-emerald-600 transition-colors">{sport.name}</h3>
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{sport.role}</p>
                        </div>
                      </div>
                      <Badge className={cn("rounded-lg font-black text-[9px] uppercase tracking-widest border-none px-3 py-1.5", 
                        sport.status === "Active" ? "bg-emerald-50 text-emerald-600" : "bg-slate-100 text-slate-400"
                      )}>
                        {sport.status}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-slate-50">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Current Performance</span>
                          <span className="text-sm font-black text-slate-900">{sport.performance}%</span>
                        </div>
                        <Progress value={sport.performance} className="h-2 rounded-full bg-slate-100" indicatorClassName={cn(
                          sport.color === "emerald" ? "bg-emerald-500" : 
                          sport.color === "blue" ? "bg-blue-500" : "bg-indigo-500"
                        )} />
                        <div className="flex items-center gap-3 mt-4">
                          <Avatar className="h-10 w-10 border-2 border-white shadow-sm ring-1 ring-slate-100">
                            <AvatarFallback className="bg-slate-100 font-bold text-slate-500">{sport.coach[0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-xs font-bold text-slate-900 leading-none">{sport.coach}</p>
                            <p className="text-[9px] text-slate-400 font-medium uppercase mt-1">Head Coach</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-slate-50 rounded-2xl p-6 flex flex-col justify-between">
                        <div>
                          <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-2">Upcoming Match / Practice</p>
                          <p className="text-lg font-bold text-slate-900">{sport.nextMatch}</p>
                        </div>
                        <div className="flex items-center gap-2 mt-4">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">School Sports Complex</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Sidebar Achievements */}
        <div className="space-y-8">
          <Card className="border-none shadow-xl shadow-slate-200/50 rounded-3xl bg-white overflow-hidden flex flex-col h-full">
            <CardHeader className="p-8 pb-4">
              <CardTitle className="text-xl font-bold text-slate-900">Achievements</CardTitle>
              <CardDescription>Major awards and medals earned.</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-slate-50 px-8">
                {achievements.map((ach, i) => (
                  <div key={ach.id} className="py-6 flex items-center gap-4 group cursor-pointer">
                    <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110 shadow-sm", 
                      ach.color === "amber" ? "bg-amber-50 text-amber-500" : 
                      ach.color === "blue" ? "bg-blue-50 text-blue-500" : "bg-rose-50 text-rose-500"
                    )}>
                      <ach.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">{ach.title}</h4>
                      <p className="text-xs text-slate-500">{ach.event}</p>
                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1">{ach.date}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" />
                  </div>
                ))}
              </div>
              <div className="p-6">
                <Button variant="ghost" className="w-full text-emerald-600 font-bold text-xs uppercase tracking-widest hover:bg-emerald-50 rounded-xl py-6 border border-emerald-100">
                  View Full Trophy Cabinet
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-xl shadow-indigo-200/40 rounded-3xl bg-indigo-600 text-white overflow-hidden p-8 flex flex-col justify-between group h-fit">
            <div className="absolute top-[-20%] left-[-20%] w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700" />
            <div className="relative z-10 mb-8">
              <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl w-fit mb-6">
                <Star className="w-8 h-8 text-white fill-current" />
              </div>
              <h3 className="text-2xl font-black mb-2">Olympic Potential</h3>
              <p className="text-indigo-100 text-sm leading-relaxed mb-8">
                Based on current swimming stats, Leo is eligible for the National Junior Olympics trials.
              </p>
              <Button className="w-full bg-white text-indigo-600 hover:bg-indigo-50 font-black h-12 rounded-xl text-xs uppercase tracking-widest shadow-lg shadow-indigo-100 transition-all">
                Express Interest
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}
