import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";

const glossary = {
  Hypertension: {
    title: "Hypertension (High Blood Pressure)",
    body: "High blood pressure means the force of blood against your arteries is consistently too high. Over time, this can strain the heart, brain, and kidneys."
  },
  Metformin: {
    title: "Metformin",
    body: "Metformin is a medication that helps lower blood sugar by improving how your body uses insulin."
  },
  A1c: {
    title: "Hemoglobin A1c",
    body: "A1c reflects your average blood sugar level over the past 2–3 months."
  }
};

export default function HealthCVApp() {
  const [selectedTerm, setSelectedTerm] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {/* LEFT: FORM */}
      <Card className="rounded-2xl shadow-sm">
        <CardContent className="space-y-4">
          <h1 className="text-xl font-semibold">Health CV</h1>

          <div>
            <label className="text-sm font-medium">Active Problems</label>
            <div className="flex items-center gap-2 mt-1">
              <span className="underline cursor-pointer" onClick={() => setSelectedTerm(glossary.Hypertension)}>Hypertension</span>
              <Info className="w-4 h-4 text-gray-400" />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">Medications</label>
            <div className="flex items-center gap-2 mt-1">
              <span className="underline cursor-pointer" onClick={() => setSelectedTerm(glossary.Metformin)}>Metformin</span>
              <Info className="w-4 h-4 text-gray-400" />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">Key Labs</label>
            <div className="flex items-center gap-2 mt-1">
              <span className="underline cursor-pointer" onClick={() => setSelectedTerm(glossary.A1c)}>A1c</span>
              <Info className="w-4 h-4 text-gray-400" />
            </div>
          </div>

          <Button className="mt-4">Generate PDF</Button>
        </CardContent>
      </Card>

      {/* RIGHT: PREVIEW */}
      <Card className="rounded-2xl shadow-sm">
        <CardContent className="space-y-4">
          <h2 className="text-lg font-semibold">Live Preview</h2>
          <p className="text-sm"><b>Active Problems:</b> Hypertension</p>
          <p className="text-sm"><b>Medications:</b> Metformin</p>
          <p className="text-sm"><b>Labs:</b> A1c 6.7%</p>
        </CardContent>
      </Card>

      {/* EDUCATION PANEL */}
      {selectedTerm && (
        <div className="fixed right-6 top-6 w-80">
          <Card className="rounded-2xl shadow-lg">
            <CardContent className="space-y-2">
              <h3 className="font-semibold">{selectedTerm.title}</h3>
              <p className="text-sm text-gray-700">{selectedTerm.body}</p>
              <Button variant="ghost" onClick={() => setSelectedTerm(null)}>Close</Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
