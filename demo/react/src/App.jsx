import React from "react";
import { useState } from "react";
import SnapLine from "./lib/snapline.mjs";
import SnapLineReact from "./SnapLineReact";
import NodeSelect from "./NodeSelect";
import MathNode from "./components/nodes/Math";
import ConstantNode from "./components/nodes/Constant";
import LerpNode from "./components/nodes/Lerp";
import PrintNode from "./components/nodes/Print";

export default function App() {
  const [snapLine] = useState(() => new SnapLine());
  const [nodes, setNodes] = useState([]);
  const [chooseNodeToggle, setChooseNodeToggle] = useState(false);

  function menuClick(e, type) {
    if (type === "nodeMenu") {
      setChooseNodeToggle(() => !chooseNodeToggle);
    }
  }

  return (
    <main>
      <link rel="stylesheet" href={`lib/style.css`} />

      <SnapLineReact snapLine={snapLine}>{nodes}</SnapLineReact>

      <nav className="navbar">
        <div className="sl-dropdown">
          <div
            id="addNodeButton"
            className={`menu-button${chooseNodeToggle ? "" : " hide"}`}
            onClick={(e) => menuClick(e, "nodeMenu")}
          >
            Add Node
            <ul className="hide" id="addNodeMenu">
              <NodeSelect
                snapLine={snapLine}
                name="Math"
                component={MathNode}
                setNodes={setNodes}
              />

              <NodeSelect
                snapLine={snapLine}
                name="Constant"
                component={ConstantNode}
                setNodes={setNodes}
              />

              <NodeSelect
                snapLine={snapLine}
                name="Lerp"
                component={LerpNode}
                setNodes={setNodes}
              />

              <NodeSelect
                snapLine={snapLine}
                name="Print"
                component={PrintNode}
                setNodes={setNodes}
              />
            </ul>
          </div>
        </div>
      </nav>
    </main>
  );
}
