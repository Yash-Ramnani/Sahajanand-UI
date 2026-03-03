"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Home, 
  MapPin, 
  User, 
  Phone, 
  Utensils, 
  CheckCircle2, 
  AlertCircle, 
  Search, 
  Filter, 
  Plus, 
  Download, 
  CalendarDays, 
  Clock, 
  History, 
  MessageSquare,
  ShieldCheck
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const mealPlan = [
  { day: "Monday", breakfast: "Oatmeal & Fruits", lunch: "Grilled Chicken & Salad", dinner: "Vegetable Stew" },
  { day: "Tuesday", breakfast: "Scrambled Eggs", lunch: "Pasta Carbonara", dinner: "Lentil Soup" },
  { day: "Wednesday", breakfast: "Pancakes", lunch: "Fish & Chips", dinner: "Beef Stir-fry" },
];

export default function HostelPage() {
  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-3">
            <Home className="w-8 h-8 text-violet-600" />
            Hostel Management
          </h1>
          <p className="text-slate-500 mt-1">Manage Vikas's residential details, meal plans, and security logs.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="rounded-xl border-slate-200 h-12 px-6 font-bold gap-2">
            <MessageSquare className="w-4 h-4" />
            Contact Warden
          </Button>
          <Button className="bg-violet-600 hover:bg-violet-700 text-white rounded-xl h-12 px-6 shadow-lg shadow-violet-100 font-bold gap-2">
            <Plus className="w-4 h-4" />
            Raise Complaint
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Accommodation Details */}
        <Card className="lg:col-span-2 border-none shadow-xl shadow-slate-200/50 rounded-3xl bg-white overflow-hidden p-8">
          <CardHeader className="p-0 mb-8">
            <CardTitle className="text-2xl font-bold text-slate-900">Current Residence</CardTitle>
            <CardDescription>Academic Year 2024-25 • Wing B (International)</CardDescription>
          </CardHeader>
          <CardContent className="p-0 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-violet-50 rounded-2xl border border-violet-100 group hover:scale-105 transition-transform cursor-pointer">
                <p className="text-[10px] font-black uppercase tracking-widest text-violet-600 mb-2">Room Number</p>
                <p className="text-3xl font-black text-violet-900">B-402</p>
                <p className="text-[10px] text-violet-600/70 font-medium mt-1 uppercase flex items-center gap-1.5"><MapPin className="w-3 h-3" /> 4th Floor</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 group hover:scale-105 transition-transform cursor-pointer">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Room Type</p>
                <p className="text-2xl font-black text-slate-900">Four Sharing</p>
                <p className="text-[10px] text-slate-400 font-medium mt-1 uppercase flex items-center gap-1.5"><ShieldCheck className="w-3 h-3 text-indigo-500" /> Premium AC</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 group hover:scale-105 transition-transform cursor-pointer">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Entry Card ID</p>
                <p className="text-2xl font-black text-slate-900">H-902341</p>
                <p className="text-[10px] text-slate-400 font-medium mt-1 uppercase flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-emerald-500" /> Active Status</p>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-50 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-slate-900">Hostel Warden</h3>
                <div className="p-4 bg-white border border-slate-100 rounded-2xl flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow">
                  <Avatar className="h-14 w-14 border-2 border-white shadow-sm ring-1 ring-slate-100">
                    <AvatarImage src="" />
                    <AvatarFallback>NS</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-lg font-bold text-slate-900 leading-none mb-1">Mr. Nitin Singh</p>
                    <p className="text-xs text-slate-500 mb-3">Head Warden • Wing B</p>
                    <div className="flex gap-4">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-600"><Phone className="w-3.5 h-3.5" /> +91 98765 43210</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-slate-900">Roommate Details</h3>
                <div className="p-4 bg-white border border-slate-100 rounded-2xl flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow">
                  <Avatar className="h-14 w-14 border-2 border-white shadow-sm ring-1 ring-slate-100">
                    <AvatarImage src="" />
                    <AvatarFallback>VS</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-lg font-bold text-slate-900 leading-none mb-1">Vidit Shah</p>
                    <p className="text-xs text-slate-500 mb-3">Grade 10-A • Student ID: 2024099</p>
                    <Badge variant="secondary" className="bg-emerald-50 text-emerald-600 font-black text-[9px] uppercase tracking-widest border-none">Active Student</Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Meal Plan Sidebar */}
        <div className="space-y-8">
          <Card className="border-none shadow-xl shadow-slate-200/50 rounded-3xl bg-white overflow-hidden flex flex-col h-full">
            <CardHeader className="p-8 pb-4">
              <div className="flex justify-between items-center mb-2">
                <CardTitle className="text-xl font-bold text-slate-900">Meal Plan</CardTitle>
                <Utensils className="w-5 h-5 text-violet-500" />
              </div>
              <CardDescription>Nutritionally balanced weekly menu.</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-slate-50 px-8">
                {mealPlan.map((meal, i) => (
                  <div key={i} className="py-6 space-y-3 group cursor-pointer">
                    <h4 className="font-black text-slate-900 text-sm uppercase tracking-widest text-violet-600">{meal.day}</h4>
                    <div className="space-y-1.5">
                      <p className="text-xs flex items-center gap-2"><span className="w-1.5 h-1.5 bg-indigo-500 rounded-full" /><span className="font-bold text-slate-400 uppercase tracking-widest text-[9px]">Breakfast:</span> <span className="text-slate-700 font-medium">{meal.breakfast}</span></p>
                      <p className="text-xs flex items-center gap-2"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" /><span className="font-bold text-slate-400 uppercase tracking-widest text-[9px]">Lunch:</span> <span className="text-slate-700 font-medium">{meal.lunch}</span></p>
                      <p className="text-xs flex items-center gap-2"><span className="w-1.5 h-1.5 bg-rose-500 rounded-full" /><span className="font-bold text-slate-400 uppercase tracking-widest text-[9px]">Dinner:</span> <span className="text-slate-700 font-medium">{meal.dinner}</span></p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-6">
                <Button className="w-full bg-slate-900 hover:bg-violet-600 text-white font-black h-12 rounded-xl text-xs uppercase tracking-widest shadow-lg shadow-slate-100 transition-all">
                  Full Monthly Menu
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-xl shadow-slate-200/50 rounded-3xl bg-white overflow-hidden p-8 flex flex-col h-fit">
            <CardTitle className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2"><Clock className="w-5 h-5 text-violet-600" /> Attendance Log</CardTitle>
            <div className="space-y-4">
              {[
                { time: "09:12 PM", status: "Checked-in", date: "Today", color: "emerald" },
                { time: "07:30 AM", status: "Checked-out", date: "Today", color: "amber" },
                { time: "10:05 PM", status: "Checked-in", date: "Yesterday", color: "emerald" },
              ].map((log, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className={cn("w-2 h-2 rounded-full", log.color === "emerald" ? "bg-emerald-500" : "bg-amber-500")} />
                    <span className="text-sm font-bold text-slate-700">{log.status}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{log.time}</p>
                    <p className="text-[9px] text-slate-400 font-medium">{log.date}</p>
                  </div>
                </div>
              ))}
              <Button variant="ghost" className="w-full text-violet-600 font-bold text-xs uppercase tracking-widest hover:bg-violet-50 rounded-xl py-6">
                View Detailed Logs <History className="w-4 h-4 ml-2" />
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
