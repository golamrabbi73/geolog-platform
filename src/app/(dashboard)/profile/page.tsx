"use client";

import { useMyProfile } from "@/hooks/user/useMyProfile";
import { User, Mail, Shield, Calendar } from "lucide-react";

export default function ProfilePage() {
  const { data, isPending, isError } = useMyProfile();

  if (isPending) {
    return (
      <div className="max-w-2xl mx-auto py-10 px-4 animate-pulse">
        <div className="card bg-base-100 border border-base-200 rounded-3xl overflow-hidden shadow-xl">
          {/* Header Skeleton */}
          <div className="bg-base-200 p-8 text-center border-b border-base-200">
            <div className="w-24 h-24 mx-auto rounded-full bg-base-300 mb-4" />
            <div className="h-6 w-32 mx-auto bg-base-300 rounded mb-2" />
            <div className="h-4 w-40 mx-auto bg-base-300 rounded" />
          </div>
          {/* Body Skeleton */}
          <div className="card-body p-8 space-y-6">
            <div className="h-16 w-full bg-base-200 rounded-2xl" />
            <div className="h-16 w-full bg-base-200 rounded-2xl" />
            <div className="grid grid-cols-2 gap-4">
              <div className="h-16 w-full bg-base-200 rounded-2xl" />
              <div className="h-16 w-full bg-base-200 rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="flex h-96 items-center justify-center text-error font-medium">
        Failed to load profile. Please try again later.
      </div>
    );
  }

  const user = data.data;

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <div className="card bg-base-100 border border-base-200 shadow-xl rounded-3xl overflow-hidden">
        {/* Header Section */}
        <div className="bg-primary/5 p-8 text-center border-b border-base-200">
          <div className="w-24 h-24 mx-auto rounded-full bg-primary flex items-center justify-center text-4xl font-bold text-white mb-4 border-4 border-base-100 shadow-lg overflow-hidden">
            {user.photoURL && user.photoURL.length > 0 ? (
              <img 
                src={user.photoURL} 
                alt={user.name} 
                className="w-full h-full object-cover" 
              />
            ) : (
              user.name.charAt(0).toUpperCase()
            )}
          </div>
          <h1 className="text-2xl font-bold">{user.name}</h1>
          <p className="text-base-content/60 text-sm">Member since {new Date(user.createdAt).getFullYear()}</p>
        </div>

        {/* Details Section */}
        <div className="card-body p-8 space-y-6">
          <div className="grid gap-6">
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-base-200/50 hover:bg-base-200 transition-colors">
              <div className="p-2 rounded-xl bg-primary/10 text-primary">
                <User size={20} />
              </div>
              <div>
                <p className="text-xs text-base-content/50 uppercase tracking-wider font-semibold">Name</p>
                <p className="font-medium">{user.name}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-base-200/50 hover:bg-base-200 transition-colors">
              <div className="p-2 rounded-xl bg-primary/10 text-primary">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs text-base-content/50 uppercase tracking-wider font-semibold">Email Address</p>
                <p className="font-medium">{user.email}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-base-200/50">
                <div className="p-2 rounded-xl bg-primary/10 text-primary">
                  <Shield size={20} />
                </div>
                <div>
                  <p className="text-xs text-base-content/50 uppercase tracking-wider font-semibold">Role</p>
                  <p className="font-medium capitalize">{user.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-base-200/50">
                <div className="p-2 rounded-xl bg-primary/10 text-primary">
                  <Calendar size={20} />
                </div>
                <div>
                  <p className="text-xs text-base-content/50 uppercase tracking-wider font-semibold">Joined</p>
                  <p className="font-medium">{new Date(user.createdAt).toLocaleDateString()}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}