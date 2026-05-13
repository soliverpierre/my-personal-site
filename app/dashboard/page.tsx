"use client";

import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

export default function DashboardPage() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main className="min-h-screen flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold">
            Welcome {user?.username}
          </h1>

          <p className="mt-4">
            This dashboard is protected by AWS Amplify Authentication.
          </p>

          <button
            onClick={signOut}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
          >
            Sign Out
          </button>
        </main>
      )}
    </Authenticator>
  );
}