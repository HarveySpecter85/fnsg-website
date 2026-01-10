const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, '../public/briefs');
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

const doc = new PDFDocument({ margin: 50 });
doc.pipe(fs.createWriteStream(path.join(outputDir, 'screening-efficiency-brief.pdf')));

// Title
doc.fontSize(24).fillColor('#0F172A').text('Screening Pipeline Efficiency Brief', { align: 'center' });
doc.moveDown(0.5);
doc.fontSize(14).fillColor('#475569').text('How FNSG Screening OS Reduces Latency, Exceptions, and Hiring Delays', { align: 'center' });
doc.moveDown(2);

// 1. Problem Overview
doc.fontSize(16).fillColor('#1E293B').text('1. Problem Overview');
doc.moveDown(0.5);
doc.fontSize(12).fillColor('#334155').text('Industrial employers lose up to 3–5 production days per month due to manual screening, medical clearance delays, and exception misrouting.');
doc.moveDown(1.5);

// 2. Key Metrics Improved
doc.fontSize(16).fillColor('#1E293B').text('2. Key Metrics Improved');
doc.moveDown(0.5);
doc.fontSize(12).fillColor('#334155')
    .text('• Screening cycle time: -32% to -55%')
    .text('• Clearance exceptions: -20% to -35%')
    .text('• Ready-to-Work availability: +22% to +40%');
doc.moveDown(1.5);

// 3. Why Traditional Screening Fails
doc.fontSize(16).fillColor('#1E293B').text('3. Why Traditional Screening Fails');
doc.moveDown(0.5);
doc.text('• Manual review queues');
doc.text('• Stalled medical documentation');
doc.text('• Lack of real-time readiness visibility');
doc.text('• No proactive routing of exceptions');
doc.moveDown(1.5);

// 4. What the Screening OS Solves
doc.fontSize(16).fillColor('#1E293B').text('4. What the Screening OS Solves');
doc.moveDown(0.5);
doc.text('• Automated clearance pathways');
doc.text('• Real-time readiness scoring');
doc.text('• Exception queue dashboards');
doc.text('• Compliance-first routing');
doc.moveDown(1.5);

// 5. Case Snapshot (Hall County Food Plant)
doc.fontSize(16).fillColor('#1E293B').text('5. Case Snapshot (Hall County Food Plant)');
doc.moveDown(0.5);
doc.text('• Screening delays reduced by 52%');
doc.text('• Readiness On-Time increased 41%');
doc.text('• Compliance Errors down 47%');
doc.moveDown(1.5);

// 6. Why It Matters for Georgia Employers
doc.fontSize(16).fillColor('#1E293B').text('6. Why It Matters for Georgia Employers');
doc.moveDown(0.5);
doc.text('Georgia manufacturing, logistics, and food production operations face demand surges, multi-site complexity, and compliance pressure.');
doc.moveDown(0.5);
doc.text('Screening OS reduces friction and accelerates hiring at scale.');

doc.end();
console.log('PDF Generated Successfully at public/briefs/screening-efficiency-brief.pdf');
