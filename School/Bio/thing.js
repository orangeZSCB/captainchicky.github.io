//1 function for sequencing selection and iteration
//purpose = find the length of the name
//paramteter "name" the name the user wants to input

//onEvent("button1", "click", function( ) {
 // rawDNA = getText("text_input1");
  //console.log(convertraw(rawDNA));
  //console.log(DNAparser(DNAinput));
  //console.log(mRNAjoiner(mRNAoutput));
  //console.log(mRNAconverter(mRNAinput));
//});


//function 0
//var rawDNA = 'tacgactgggtcatcgtacgctgggggatc';
var rawDNA = "";
var DNAinput = [];
var mRNAoutput = [];
var mRNAinput = [];
var AAoutput = [];

function convert(rawDNA){
  //part 1
  for (var i = 0; i < rawDNA.length; i++) {
  var temp2 = rawDNA[i].toUpperCase();
  DNAinput.push(temp2);
  }
  //part 2
  for (var i = 0; i < DNAinput.length; i++) {
    if (DNAinput[i] == "T") {
      mRNAoutput.push("A");
    }
    else if (DNAinput[i] == "A") {
      mRNAoutput.push("U");
    } 
    else if (DNAinput[i] == "C") {
      mRNAoutput.push("G");
    }
    else if (DNAinput[i] == "G") {
      mRNAoutput.push("C");
    }
  }
  //part 3
  for (var i = 0; i < mRNAoutput.length-2; i+=3) {
    var temp = mRNAoutput[i] + mRNAoutput[i+1] + mRNAoutput[i+2];
    mRNAinput.push(temp);
  }
  //paert 4
  for (var i = 0; i < mRNAinput.length; i++) {
    if (mRNAinput[i] == "UUU" || mRNAinput[i] == "UUC") {
      AAoutput.push("Phe");
    }
    else if (mRNAinput[i] == "UUA" || mRNAinput[i] == "UUG" || mRNAinput[i] == "CUU" || mRNAinput[i] == "CUC" || mRNAinput[i] == "CUA" || mRNAinput[i] == "CUG") {
      AAoutput.push("Leu");
    } 
    else if (mRNAinput[i] == "AUU" || mRNAinput[i] == "AUC" || mRNAinput[i] == "AUA") {
      AAoutput.push("Ile");
    }
    else if (mRNAinput[i] == "AUG") {
      AAoutput.push("Met");
    }
    else if (mRNAinput[i] == "GUU" || mRNAinput[i] == "GUC" || mRNAinput[i] == "GUA" || mRNAinput[i] == "GUG") {
      AAoutput.push("Val");
    }
    else if (mRNAinput[i] == "UCU" || mRNAinput[i] == "UCC" || mRNAinput[i] == "UCA" || mRNAinput[i] == "UCG" || mRNAinput[i] == "AGU" || mRNAinput[i] == "AGC") {
      AAoutput.push("Ser");
    }
    else if (mRNAinput[i] == "CCU" || mRNAinput[i] == "CCC" || mRNAinput[i] == "CCA" || mRNAinput[i] == "CCG") {
      AAoutput.push("Pro");
    }
    else if (mRNAinput[i] == "ACU" || mRNAinput[i] == "ACC" || mRNAinput[i] == "ACA" || mRNAinput[i] == "ACG") {
      AAoutput.push("Thr");
    }
    else if (mRNAinput[i] == "GCU" || mRNAinput[i] == "GCC" || mRNAinput[i] == "GCA" || mRNAinput[i] == "GCG") {
      AAoutput.push("Ala");
    }
    else if (mRNAinput[i] == "UAU" || mRNAinput[i] == "UAC") {
      AAoutput.push("Tyr");
    }
    else if (mRNAinput[i] == "CAU" || mRNAinput[i] == "CAC") {
      AAoutput.push("His");
    }
    else if (mRNAinput[i] == "CAA" || mRNAinput[i] == "CAG") {
      AAoutput.push("Gln"); 
    }
    else if (mRNAinput[i] == "AAU" || mRNAinput[i] == "AAC") {
      AAoutput.push("Asn"); 
    }
    else if (mRNAinput[i] == "AAA" || mRNAinput[i] == "AAG") {
      AAoutput.push("Lys");
    }
    else if (mRNAinput[i] == "GAU" || mRNAinput[i] == "GAC") {
      AAoutput.push("Asp");
    }
    else if (mRNAinput[i] == "GAA" || mRNAinput[i] == "GAG") {
      AAoutput.push("Glu");
    }
    else if (mRNAinput[i] == "UGU" || mRNAinput[i] == "UGC") {
      AAoutput.push("Cys"); 
    }
    else if (mRNAinput[i] == "UGG") {
      AAoutput.push("Trp");
    }
    else if (mRNAinput[i] == "CGY" || mRNAinput[i] == "CGC" || mRNAinput[i] == "CGA" || mRNAinput[i] == "CGG") {
      AAoutput.push("Arp"); 
    }
    else if (mRNAinput[i] == "AGA" || mRNAinput[i] == "AGG") {
      AAoutput.push("Arg");
    }
    else if (mRNAinput[i] == "GGU" || mRNAinput[i] == "GGC" || mRNAinput[i] == "GGA" || mRNAinput[i] == "GGG") {
      AAoutput.push("Gly");
    }
    else if (mRNAinput[i] == "UAA" || mRNAinput[i] == "UAG" || mRNAinput[i] == "UGa") {
      AAoutput.push("Stop");
    }
  }
  return AAoutput;
}
