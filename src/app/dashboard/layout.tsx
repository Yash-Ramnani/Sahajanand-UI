"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  CalendarCheck, 
  BookOpen, 
  FileCheck, 
  CreditCard, 
  HeartPulse, 
  ShieldAlert, 
  FileText, 
  Megaphone, 
  CalendarDays, 
  Trophy, 
  Home, 
  Settings, 
  LogOut, 
  Bell, 
  Search, 
  Menu, 
  ChevronRight, 
  User, 
  ChevronDown,
  GraduationCap
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: CalendarCheck, label: "Attendance", href: "/dashboard/attendance" },
  { icon: BookOpen, label: "Homework", href: "/dashboard/homework" },
  { icon: FileCheck, label: "Exams & Results", href: "/dashboard/exams" },
  { icon: CreditCard, label: "Fees & Payments", href: "/dashboard/fees" },
  { icon: HeartPulse, label: "Health Records", href: "/dashboard/health" },
  { icon: ShieldAlert, label: "Behavior Report", href: "/dashboard/behavior" },
  { icon: FileText, label: "Leave Application", href: "/dashboard/leave" },
  { icon: Megaphone, label: "Announcements", href: "/dashboard/announcements" },
  { icon: CalendarDays, label: "Calendar", href: "/dashboard/calendar" },
  { icon: Trophy, label: "Sports", href: "/dashboard/sports" },
  { icon: Home, label: "Hostel", href: "/dashboard/hostel" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden font-sans">
      {/* Sidebar - Desktop */}
      <motion.aside
        initial={false}
        animate={{ width: isSidebarOpen ? 280 : 80 }}
        className="relative z-40 hidden lg:flex flex-col bg-white border-r border-slate-200 transition-all duration-300 ease-in-out shadow-sm"
      >
        {/* Sidebar Header */}
        <div className="flex items-center gap-3 px-6 h-20 border-b border-slate-50">
          <div className="flex items-center justify-center p-2 bg-indigo-600 rounded-xl">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          {isSidebarOpen && (
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-bold text-xl text-slate-900 truncate"
            >
              EduParent
            </motion.span>
          )}
        </div>

        {/* Sidebar Navigation */}
        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1 custom-scrollbar">
          {sidebarItems.map((item) => {
            const isActive = pathname === item.href;
            return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group relative",
                    isActive 
                      ? "bg-indigo-50 text-indigo-700 font-semibold" 
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                  )}
                >
                <item.icon className={cn(
                  "w-5 h-5 flex-shrink-0 transition-transform group-hover:scale-110",
                  isActive ? "text-indigo-600" : "text-slate-400 group-hover:text-slate-600"
                )} />
                {isSidebarOpen && (
                  <motion.span 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="truncate whitespace-nowrap"
                  >
                    {item.label}
                  </motion.span>
                )}
                {isActive && (
                  <motion.div
                    layoutId="active-nav-indicator"
                    className="absolute left-0 w-1 h-6 bg-indigo-600 rounded-full"
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-slate-50">
          <Button 
            variant="ghost" 
            className="w-full justify-start gap-3 text-red-500 hover:text-red-600 hover:bg-red-50 rounded-xl"
            asChild
          >
            <Link href="/login">
              <LogOut className="w-5 h-5" />
              {isSidebarOpen && <span>Logout</span>}
            </Link>
          </Button>
        </div>
        
        {/* Toggle Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute -right-4 top-24 bg-white border border-slate-200 shadow-sm rounded-full w-8 h-8 z-50 hover:bg-slate-50"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <ChevronRight className={cn("w-4 h-4 transition-transform", isSidebarOpen && "rotate-180")} />
        </Button>
      </motion.aside>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 lg:hidden"
            />
            <motion.aside
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 w-72 bg-white z-50 lg:hidden flex flex-col shadow-2xl"
            >
              <div className="flex items-center justify-between px-6 h-20 border-b border-slate-50">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-indigo-600 rounded-xl">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-bold text-xl text-slate-900">EduParent</span>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                  <ChevronRight className="w-5 h-5 rotate-180" />
                </Button>
              </div>
              <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1 custom-scrollbar">
                {sidebarItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group relative",
                        isActive 
                          ? "bg-indigo-50 text-indigo-700 font-semibold" 
                          : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                      )}
                    >
                      <item.icon className={cn(
                        "w-5 h-5 flex-shrink-0",
                        isActive ? "text-indigo-600" : "text-slate-400 group-hover:text-slate-600"
                      )} />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-4 lg:px-8 z-30 shadow-sm">
          <div className="flex items-center gap-4 flex-1 max-w-xl">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </Button>
            <div className="relative w-full hidden sm:block">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
              <Input 
                placeholder="Search anything..." 
                className="pl-10 bg-slate-50 border-none rounded-xl h-10 w-full focus-visible:ring-indigo-600 transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative rounded-full bg-slate-50 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                  <Bell className="w-5 h-5" />
                  <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80 p-0 rounded-2xl overflow-hidden border-slate-200 shadow-xl">
                <div className="p-4 bg-indigo-600 text-white flex justify-between items-center">
                  <h4 className="font-semibold">Notifications</h4>
                  <Badge className="bg-white/20 text-white border-none">3 New</Badge>
                </div>
                <div className="max-h-80 overflow-y-auto p-2">
                  {[
                    { title: "Homework Due", desc: "English Essay is due tomorrow.", time: "10m ago", color: "blue" },
                    { title: "Attendance Alert", desc: "Vikas was marked absent today.", time: "2h ago", color: "red" },
                    { title: "Result Published", desc: "Math Mid-term results are out.", time: "5h ago", color: "green" },
                  ].map((notif, i) => (
                    <div key={i} className="flex gap-3 p-3 hover:bg-slate-50 rounded-xl cursor-pointer transition-colors mb-1">
                      <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0", 
                        notif.color === "blue" ? "bg-blue-100 text-blue-600" : 
                        notif.color === "red" ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"
                      )}>
                        {notif.color === "blue" ? <BookOpen className="w-5 h-5" /> : 
                         notif.color === "red" ? <ShieldAlert className="w-5 h-5" /> : <FileCheck className="w-5 h-5" />}
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-sm text-slate-900">{notif.title}</p>
                        <p className="text-xs text-slate-500 line-clamp-1">{notif.desc}</p>
                        <p className="text-[10px] text-slate-400 mt-1 uppercase font-bold tracking-wider">{notif.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-2 border-t border-slate-100">
                  <Button variant="ghost" className="w-full text-indigo-600 text-xs font-semibold hover:bg-indigo-50 rounded-lg h-8">
                    View All Notifications
                  </Button>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-3 p-1 pr-3 rounded-full hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all">
                  <Avatar className="h-9 w-9 border-2 border-white shadow-sm ring-1 ring-slate-100">
                    <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="hidden md:block text-left">
                    <p className="text-sm font-semibold text-slate-900 leading-none">Mukesh Patel</p>
                    <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider mt-1">Parent Account</p>
                  </div>
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 p-2 rounded-2xl border-slate-200 shadow-xl">
                <DropdownMenuLabel className="px-3 pt-2 pb-1 text-slate-500 font-normal text-xs uppercase tracking-widest">
                  My Profile
                </DropdownMenuLabel>
                <DropdownMenuItem className="rounded-xl px-3 py-2 cursor-pointer focus:bg-indigo-50 focus:text-indigo-600">
                  <User className="mr-2 h-4 w-4" />
                  <span>View Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="rounded-xl px-3 py-2 cursor-pointer focus:bg-indigo-50 focus:text-indigo-600">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="my-2 bg-slate-100" />
                <DropdownMenuItem className="rounded-xl px-3 py-2 cursor-pointer text-red-500 focus:bg-red-50 focus:text-red-600">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {children}
          </motion.div>
        </main>
      </div>
      
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #cbd5e1;
        }
      `}</style>
    </div>
  );
}
