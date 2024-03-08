import React from 'react';

import { Shell } from "@repo/ui"
import { CardPicker } from "cardpicker/CardPicker"

function App() {
  return (
    <Shell title='Game Zone'>
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridGap: '1rem',
      }}>
        <CardPicker />
      </div>
    </Shell>
  );
}

export default App;
