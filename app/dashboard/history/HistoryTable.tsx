"use client";

export interface HistoryItem {
  templateSlug: string;
  aiResponse: string;
  createdAt: string;
}

export default function HistoryTable({ history }: { history: HistoryItem[] }) {
  return (
    <table className="min-w-full border">
      <thead>
        <tr>
          <th className="border px-4 py-2">Template</th>
          <th className="border px-4 py-2">AI Response</th>
          <th className="border px-4 py-2">Date</th>
          <th className="border px-4 py-2">Words</th>
          <th className="border px-4 py-2">Copy</th>
        </tr>
      </thead>
      <tbody>
        {history.map((item, idx) => (
          <tr key={idx}>
            <td className="border px-4 py-2">{item.templateSlug}</td>
            <td className="border px-4 py-2 max-w-xs truncate">{item.aiResponse}</td>
            <td className="border px-4 py-2">{item.createdAt}</td>
            <td className="border px-4 py-2">{item.aiResponse?.split(" ").length}</td>
            <td className="border px-4 py-2">
              <button
                className="bg-blue-500 text-white px-2 py-1 rounded"
                onClick={() => navigator.clipboard.writeText(item.aiResponse)}
              >
                Copy
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}