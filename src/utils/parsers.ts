export interface FioResult {
  blockSize: string;
  read: string;
  write: string;
  total: string;
}

export function parseFioOutput(rawOutput: string): FioResult[] {
  const fioResults: FioResult[] = [];
  const lines = rawOutput.split('\\n');

  const fioSection = lines.slice(
    lines.findIndex(line => line.includes('fio Disk Speed Tests')),
  );

  if (!fioSection) return [];

  const testLines = fioSection.filter(line => line.startsWith('Read') || line.startsWith('Write') || line.startsWith('Total'));
  
  if(testLines.length < 2) return [];

  const readParts = testLines[0].split('|').map(s => s.trim()).slice(1);
  const writeParts = testLines[1].split('|').map(s => s.trim()).slice(1);
  const totalParts = testLines[2].split('|').map(s => s.trim()).slice(1);
  const readParts2 = testLines[3].split('|').map(s => s.trim()).slice(1);
  const writeParts2 = testLines[4].split('|').map(s => s.trim()).slice(1);
  const totalParts2 = testLines[5].split('|').map(s => s.trim()).slice(1);


  const blockSizesLine = fioSection.find(line => line.includes('Block Size'));
  if (blockSizesLine) {
    const blockSizes = blockSizesLine.split('|').map(s => s.trim()).slice(1);
    if (blockSizes.length >= 2 && readParts.length >= 2 && writeParts.length >= 2 && totalParts.length >= 2) {
        fioResults.push({
            blockSize: blockSizes[0].split('(')[0].trim(),
            read: readParts[0],
            write: writeParts[0],
            total: totalParts[0],
        });
        fioResults.push({
            blockSize: blockSizes[1].split('(')[0].trim(),
            read: readParts[1],
            write: writeParts[1],
            total: totalParts[1],
        });
    }
  }

  const blockSizesLine2 = fioSection.filter(line => line.includes('Block Size'))[1];
  if (blockSizesLine2) {
    const blockSizes = blockSizesLine2.split('|').map(s => s.trim()).slice(1);
    if (blockSizes.length >= 2 && readParts2.length >= 2 && writeParts2.length >= 2 && totalParts2.length >= 2) {
        fioResults.push({
            blockSize: blockSizes[0].split('(')[0].trim(),
            read: readParts2[0],
            write: writeParts2[0],
            total: totalParts2[0],
        });
        fioResults.push({
            blockSize: blockSizes[1].split('(')[0].trim(),
            read: readParts2[1],
            write: writeParts2[1],
            total: totalParts2[1],
        });
    }
  }


  return fioResults;
}

export interface IperfResult {
  provider: string;
  location: string;
  sendSpeed: string;
  recvSpeed: string;
  ping: string;
}

export function parseIperfOutput(rawOutput: string, ipVersion: 'IPv4' | 'IPv6'): IperfResult[] {
    const iperfResults: IperfResult[] = [];
    const lines = rawOutput.split('\\n');

    const iperfSectionIndex = lines.findIndex(line => line.includes(`iperf3 Network Speed Tests (${ipVersion})`));
    if (iperfSectionIndex === -1) {
        return [];
    }

    const iperfLines = lines.slice(iperfSectionIndex + 3); // Skip header lines

    for (const line of iperfLines) {
        if (line.trim() === '' || line.startsWith('-----')) {
            continue;
        }
        if (line.includes('Geekbench')) {
            break; // End of iperf section
        }

        const parts = line.split('|').map(s => s.trim());
        if (parts.length === 5) {
            iperfResults.push({
                provider: parts[0],
                location: parts[1],
                sendSpeed: parts[2],
                recvSpeed: parts[3],
                ping: parts[4],
            });
        }
    }

    return iperfResults;
} 