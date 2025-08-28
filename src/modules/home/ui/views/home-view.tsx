import { Suspense } from "react";
import {
  HomeAgents,
  HomeAgentsError,
  HomeAgentsLoading,
} from "../components/home-agents";
import { HomeHeader } from "../components/home-header";
import { ErrorBoundary } from "react-error-boundary";
import {
  HomeMeetings,
  HomeMeetingsError,
  HomeMeetingsLoading,
} from "../components/home-meetings";

export const HomeView = () => {
  return (
    <div className="py-4 px-4 md:px-8 flex flex-col gap-y-8">
      <HomeHeader />
      <Suspense fallback={<HomeAgentsLoading />}>
        <ErrorBoundary fallback={<HomeAgentsError />}>
          <HomeAgents />
        </ErrorBoundary>
      </Suspense>
      <Suspense fallback={<HomeMeetingsLoading />}>
        <ErrorBoundary fallback={<HomeMeetingsError />}>
          <HomeMeetings />
        </ErrorBoundary>
      </Suspense>
    </div>
  );
};
