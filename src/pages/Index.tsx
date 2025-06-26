import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Zap, ArrowRight, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent)] animate-pulse"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed"></div>
      
      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Header Section */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block mb-6">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent leading-tight">
              Ticket Terminators
            </h1>
            <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-4 glow-line"></div>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Cutting-edge solutions for the digital frontier. Explore our revolutionary projects designed to eliminate inefficiency and unlock innovation.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Chatbot Project */}
          <div className="group animate-fade-in-up">
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-500 hover:scale-105 hover:border-blue-500/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors duration-300">
                    <Bot className="w-8 h-8 text-blue-400" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-white group-hover:text-blue-300 transition-colors duration-300">
                      Chatbot
                    </CardTitle>
                    <div className="flex items-center gap-2 mt-1">
                      <Sparkles className="w-4 h-4 text-blue-400" />
                      <span className="text-blue-400 text-sm font-medium">AI-Powered</span>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-gray-300 text-lg leading-relaxed">
                  Advanced conversational AI that revolutionizes customer support and user interaction. Built with cutting-edge natural language processing capabilities.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <a href="https://your-chatbot-project-link.com" target="_blank" rel="noopener noreferrer" className="block">
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white border-0 group/btn transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                  >
                    <span className="flex items-center justify-center gap-2"> 
                      Explore Chatbot
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>

          {/* FRT Project */}
          <div className="group animate-fade-in-up-delayed">
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-500 hover:scale-105 hover:border-purple-500/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors duration-300">
                    <Zap className="w-8 h-8 text-purple-400" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-white group-hover:text-purple-300 transition-colors duration-300">
                      FRT
                    </CardTitle>
                    <div className="flex items-center gap-2 mt-1">
                      <Sparkles className="w-4 h-4 text-purple-400" />
                      <span className="text-purple-400 text-sm font-medium">High-Performance</span>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-gray-300 text-lg leading-relaxed">
                  Fast Response Technology that delivers lightning-speed processing and real-time solutions. Engineered for maximum efficiency and performance.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <a href="https://your-frt-project-link.com" target="_blank" rel="noopener noreferrer" className="block">
                  <Button 
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white border-0 group/btn transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Discover FRT
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer section */}
        <div className="text-center mt-20 animate-fade-in-delayed">
          <p className="text-gray-400 text-lg">
            Ready to terminate inefficiency and embrace the future?
          </p>
          <div className="mt-8 flex justify-center">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
