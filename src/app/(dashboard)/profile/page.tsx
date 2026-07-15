"use client";

import { useMyProfile } from "@/hooks/user/useMyProfile";

export default function ProfilePage() {
  const {
    data,
    isPending,
    isError,
  } = useMyProfile();

  if (isPending) {
    return <p>Loading...</p>;
  }

  if (isError || !data) {
    return <p>Failed to load profile.</p>;
  }

  const user = data.data;

  return (
    <div className="max-w-3xl mx-auto">
      <div className="card bg-base-100 shadow">
        <div className="card-body space-y-4">
          <h1 className="text-3xl font-bold">
            My Profile
          </h1>

          <p>
            <strong>Name:</strong>{" "}
            {user.name}
          </p>

          <p>
            <strong>Email:</strong>{" "}
            {user.email}
          </p>

          <p>
            <strong>Role:</strong>{" "}
            {user.role}
          </p>

          <p>
            <strong>Joined:</strong>{" "}
            {new Date(
              user.createdAt
            ).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}