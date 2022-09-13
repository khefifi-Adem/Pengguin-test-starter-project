import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import CenterContainer from "components/containers/CenterContainer";
import {HOME, SHOW, WATCHLIST} from "constants/routes";
const WatchList = lazy(()=> import("../pages/WatchList/WatchList"));
const Show = lazy(() =>import("../pages/Show/Show"));
const Header = lazy(() => import("components/Header"));
const Home = lazy(() => import("pages/Home"));

const RouterConfig = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <Routes>
        <Route path={HOME} element={<Home />} />
        <Route path={WATCHLIST} element={<WatchList />} />
        <Route path={SHOW} element={<Show />} />
      </Routes>
    </Suspense>
  );
};

const Loader = () => (
  <CenterContainer>
    <CircularProgress />
  </CenterContainer>
);

export default RouterConfig;
