import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import About from "@/pages/about";
import Waitlist from "@/pages/waitlist";
import Donate from "@/pages/donate";
import Volunteer from "@/pages/volunteer-collab";
import Progress from "@/pages/progress";
import PrivacyPolicy from "@/pages/privacy-policy";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function Router() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/waitlist" component={Waitlist} />
        <Route path="/donate" component={Donate} />
        <Route path="/volunteer" component={Volunteer} />
        <Route path="/progress" component={Progress} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/*" component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
