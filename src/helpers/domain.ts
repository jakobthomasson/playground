function getConstantName(domain: System.Domain, name: string): string {
  return `${domain}/${name}`;
}

export default { getConstantName };
