import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <section className="text-center py-16 px-4">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          Welcome to PropertyPlatform
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover, list, and manage properties easily with our powerful platform.
          Explore the latest listings and find your dream property today.
        </p>
        <div className="mt-8">
          <Link
            href="/properties"
            className="px-8 py-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            View Properties
          </Link>
        </div>
      </section>

      <section className="py-16 bg-white w-full">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-blue-600 mb-4">
              </div>
              <h3 className="text-xl font-semibold mb-2">Wide Selection</h3>
              <p className="text-gray-600">
                Browse a vast array of properties tailored to your preferences.
              </p>
            </div>
            <div className="text-center">
              <div className="text-blue-600 mb-4">
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Management</h3>
              <p className="text-gray-600">
                Manage your listings effortlessly with our user-friendly tools.
              </p>
            </div>
            <div className="text-center">
              <div className="text-blue-600 mb-4">
              </div>
              <h3 className="text-xl font-semibold mb-2">Trusted Platform</h3>
              <p className="text-gray-600">
                Rely on our secure and reliable platform for all your property needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
