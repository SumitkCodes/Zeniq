import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, BarChart3, Zap } from 'lucide-react';
import zeniqLogo from '/zeniq-uploads/f1df4580-0247-4c53-9897-e18fbba175db.png';

export default function Hero() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Moving neon lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse-gentle"></div>
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-pink to-transparent animate-pulse-gentle" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent animate-pulse-gentle" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-lime to-transparent animate-pulse-gentle" style={{ animationDelay: '3s' }}></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/6 left-1/6 w-20 h-20 border-2 border-primary/30 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/5 w-16 h-16 border-2 border-neon-pink/30 rounded-lg rotate-45 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-24 h-24 border-2 border-accent/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-18 h-18 border-2 border-neon-lime/30 rounded-lg animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-6">
        <div className="flex items-center gap-3">
          <img src={zeniqLogo} alt="Zeniq" className="w-10 h-10" />
          <span className="text-2xl font-heading font-bold neon-text">ZENIQ</span>
        </div>
        
        <div className="flex items-center gap-4">
          <Link to="/auth">
            <Button variant="ghost" className="text-foreground hover:text-primary">
              Sign In
            </Button>
          </Link>
          <Link to="/auth">
            <Button className="bg-primary hover:bg-primary/90 neon-glow">
              Get Started
            </Button>
          </Link>
        </div>
      </nav>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-100px)] px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Hero headline */}
          <h1 className="text-6xl md:text-8xl font-heading font-bold mb-6 leading-tight">
            <span className="neon-text">ZENIQ</span>
            <br />
            <span className="text-3xl md:text-5xl font-normal text-muted-foreground">
              Your Gen Z Gateway to the Markets
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Experience trading like never before with our{' '}
            <span className="text-primary font-semibold">neon-powered</span>,{' '}
            <span className="text-neon-pink font-semibold">AI-driven</span> platform.
            Real-time data meets pop art aesthetics.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/auth">
              <Button 
                size="lg" 
                className="bg-neon-pink hover:bg-neon-pink/90 text-white font-semibold px-8 py-6 text-lg neon-glow-pink transition-all duration-300 hover:scale-105"
              >
                Sign Up Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            
            <Link to="/auth">
              <Button 
                size="lg" 
                variant="outline"
                className="glass border-primary/30 hover:bg-primary/10 text-foreground font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
              >
                Explore Markets
                <BarChart3 className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="glass-neon p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2">Real-time Data</h3>
              <p className="text-muted-foreground text-sm">
                Live market updates with millisecond precision
              </p>
            </div>

            <div className="glass-neon p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-neon-pink/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-6 w-6 text-neon-pink" />
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2">Advanced Charts</h3>
              <p className="text-muted-foreground text-sm">
                Interactive visualizations with neon aesthetics
              </p>
            </div>

            <div className="glass-neon p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2">Lightning Fast</h3>
              <p className="text-muted-foreground text-sm">
                Zero-lag interface built for the next generation
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 text-center py-8 border-t border-border/20">
        <p className="text-sm text-muted-foreground">
          Made by{' '}
          <span className="text-primary font-semibold">Sumit Das</span>
          {' & '}
          <span className="text-primary font-semibold">Nandini Das</span>
        </p>
      </footer>
    </div>
  );
}