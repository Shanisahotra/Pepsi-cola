import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function Invoice() {

  const downloadPDF = async () => {
  const input = document.getElementById("invoice");

  const canvas = await html2canvas(input);
  const imgData = canvas.toDataURL("image/png");

  const pdf = new jsPDF();
  pdf.addImage(imgData, "PNG", 0, 0);
  pdf.save("invoice.pdf");
};

  return (
    <div id="invoice" className="p-8 bg-white w-[800px]">
<button onClick={downloadPDF}>Download Invoice</button>
      <h1 className="text-2xl font-bold mb-4">Invoice</h1>

      <div className="flex justify-between mb-6">
        <div>
          <p><b>Company:</b> Pepsi</p>
          <p><b>Email:</b> pepsi@email.com</p>
        </div>

        <div>
          <p><b>Invoice #:</b> 12345</p>
          <p><b>Date:</b> 10-Apr-2026</p>
        </div>
      </div>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Item</th>
            <th className="p-2">Qty</th>
            <th className="p-2">Price</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="p-2">Pepsi Bottle</td>
            <td className="p-2">10</td>
            <td className="p-2">$50</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-right mt-4 font-bold">Total: $50</h2>

    </div>
  );
}