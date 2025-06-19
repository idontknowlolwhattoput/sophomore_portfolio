import { useEffect, useState } from "react";

function Boot() {
  const [lines, setLines] = useState([]);

  useEffect(() => {
    const bootLines = [
      "Phoenix - AwardBIOS v6.00PG, An Energy Star Ally",
      "Copyright (C) 1984-2005, Phoenix Technologies, LTD",
      "",
      "ASUS A8N-SLI Premium ACPI BIOS Revision 1027-002",
      "",
      "Main Processor  : AMD Athlon(tm) 64 Processor 3000+",
      "Memory Testing  : 524288K OK",
      "",
      "CPU Brand Name  : AMD Athlon(tm) 64",
      "Memory SPD Information : 1 DIMM(s)",
      "Auto-Detecting Primary Master .. IDE Hard Disk",
      "Auto-Detecting Primary Slave  .. ATAPI CDROM",
      "Auto-Detecting Secondary Master .. None",
      "Auto-Detecting Secondary Slave  .. None",
      "",
      "Primary Master  : WDC WD2500JB-00REA0 08.02D08",
      "Primary Slave   : HL-DT-ST RW/DVD GCC-4481B A110",
      "Secondary Master: None",
      "Secondary Slave : None",
      "",
      "Ultra DMA Mode-5, S.M.A.R.T. Capable and Status OK",
      "",
      "Keyboard not detected. Press F1 to continue, DEL to enter SETUP",
      "",
      "12/08/2004-NF-CK804-A8N-00"
    ];

    let i = 0;
    const interval = setInterval(() => {
      setLines(prev => [...prev, bootLines[i]]);
      i++;
      if (i === bootLines.length) clearInterval(interval);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-screen h-screen bg-black text-white font-mono text-sm p-5 leading-5 tracking-wider">
      {lines.map((line, index) => (
        <div key={index} className="whitespace-pre">{line}</div>
      ))}
      <span className="animate-pulse text-white">_</span>
    </div>
  );
}

export default Boot;
  