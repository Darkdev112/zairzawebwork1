import React from "react";
import Layout from "./components/Layout/Layout";
import Website from './components/Website/Website'
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Layout>
        <Website/>
      </Layout>
    </DndProvider>
  );
}

export default App;
