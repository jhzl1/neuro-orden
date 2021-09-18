import React from "react";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import CardList from "./CardList";
import Item from "./Item";
import { BrowserRouter as Router, Route } from "react-router-dom";

function AnimatedItems({ match }) {
  let { id } = match.params;
  const imageHasLoaded = true;

  return (
    <>
      <CardList selectedId={id} />
      <AnimatePresence>
        {id && imageHasLoaded && <Item id={id} key="item" />}
      </AnimatePresence>
    </>
  );
}

const Gallery = () => {
  return (
    <AnimateSharedLayout>
      <div id="gallery">
        <Router>
          <Route path={["/:id", "/"]} component={AnimatedItems} />
        </Router>
      </div>
    </AnimateSharedLayout>
  );
};

export default Gallery;
