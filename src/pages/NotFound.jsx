import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <section className="bg-dark min-h-screen flex items-center justify-center px-6">
            <div className="text-center max-w-md">
                <p className="text-green-md text-xs tracking-widest uppercase mb-6">404</p>
                <h1 className="text-cream text-4xl md:text-5xl font-medium tracking-tight mb-4">
                    Page not found
                </h1>
                <p className="text-cream/45 text-sm leading-relaxed mb-10">
                  The page you're looking for doesn't exist or has been moved.
                </p>
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm bg-brown-md text-cream rounded hover:bg-brown transition-colors duration-300"
                >
                    ← Back to home
                </Link>
            </div>
        </section>
  )
}