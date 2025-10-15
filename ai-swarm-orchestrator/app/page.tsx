'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { 
  Zap, 
  GitBranch, 
  Cpu, 
  BarChart3, 
  Shield, 
  Sparkles,
  Bot,
  Workflow,
  Eye
} from 'lucide-react';

export default function HomePage() {
  const router = useRouter();

  const features = [
    {
      title: 'AI-Powered Agents',
      description: 'Deploy specialized AI agents for development, testing, design, and operations',
      icon: Bot,
    },
    {
      title: 'Visual Workflow Builder',
      description: 'Drag-and-drop interface to create complex agent workflows',
      icon: Workflow,
    },
    {
      title: 'Real-time Monitoring',
      description: 'Track agent activities and workflow execution in real-time',
      icon: Eye,
    },
    {
      title: 'GitHub Integration',
      description: 'Seamless integration with GitHub for repository management',
      icon: GitBranch,
    },
    {
      title: 'Multi-Model Support',
      description: 'Leverage OpenAI, Anthropic Claude, and Google AI models',
      icon: Cpu,
    },
    {
      title: 'Performance Analytics',
      description: 'Comprehensive metrics and insights on agent performance',
      icon: BarChart3,
    },
    {
      title: 'Enterprise Security',
      description: 'Production-grade security with OAuth and encrypted storage',
      icon: Shield,
    },
    {
      title: 'Smart Automation',
      description: 'Intelligent task delegation and autonomous execution',
      icon: Sparkles,
    },
    {
      title: 'Lightning Fast',
      description: 'Optimized performance with sub-second response times',
      icon: Zap,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(6,182,212,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(59,130,246,0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-block mb-6"
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/50 mx-auto">
              <Sparkles className="w-10 h-10" />
            </div>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
            AI Swarm Orchestrator
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-300 mb-4">
            Next Generation of Autonomous Software Development
          </p>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Deploy specialized AI agents that work together to build, test, and deploy your software projects with unprecedented speed and quality.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push('/setup')}
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg text-lg font-semibold shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              Begin Your Mission
              <Zap className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
              className="glass rounded-xl p-6 hover:scale-105 transition-transform duration-300 cursor-pointer group"
            >
              <feature.icon className="w-12 h-12 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-center mt-20"
        >
          <p className="text-gray-400 mb-6">
            Ready to revolutionize your development workflow?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push('/setup')}
            className="px-6 py-3 border-2 border-cyan-600 rounded-lg text-cyan-400 font-semibold hover:bg-cyan-600/10 transition-colors"
          >
            Get Started Now
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
