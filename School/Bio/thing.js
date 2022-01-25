//define mappings between dna, mrna and amino acids
//this completely mitigates the need for a massive block of elifs
const DNAtoMRNA = {
  T: 'A', 
  A: 'U', 
  C: 'G', 
  G: 'C'
};

const aminoToRNA= {
  UUU: 'Phe', UUC: 'Phe', 
  UUA: 'Leu', UUG: 'Leu', CUU: 'Leu', CUC: 'Leu', CUA: 'Leu', CUG: 'Leu',  AUG: 'Leu', 
  AUU: 'Ile', AUC: 'Ile', AUA: 'Ile', 
  GUU: 'Val', GUC: 'Val', GUA: 'Val', GUG: 'Val', 
  UCU: 'Ser', UCC: 'Ser', UCA: 'Ser', UCG: 'Ser', AGU: 'Ser', AGC: 'Ser', 
  CCU: 'Pro', CCC: 'Pro', CCA: 'Pro', CCG: 'Pro', 
  ACU: 'Thr', ACC: 'Thr', ACA: 'Thr', ACG: 'Thr',
  GCU: 'Ala', GCC: 'Ala', GCA: 'Ala', GCG: 'Ala',
  UAU: 'Tyr', UAC: 'Tyr',
  UAA: 'Stop', UAG: 'Stop', UGA: 'Stop',
  CAU: 'His', CAC: 'His',
  CAA: 'Gln', CAG: 'Gln',
  AAU: 'Asn', AAC: 'Asn',
  AAA: 'Lys', AAG: 'Lys',
  GAU: 'Asp', GAC: 'Asp',
  GAA: 'Glu', GAG: 'Glu',
  UGU: 'Cys', UGC: 'Cys',
  UGG: 'Trp',
  CGU: 'Arp', CGC: 'Arp', CGA: 'Arp', CGG: 'Arp',
  AGA: 'Arg', AGG: 'Arg',
  GGU: 'Gly', GGC: 'Gly', GGA: 'Gly', GGG: 'Gly'
};
