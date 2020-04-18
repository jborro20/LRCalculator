let btn = document.getElementById('btn');
	
btn.addEventListener('click', function (e) {
	let grossComLY = document.getElementById('grossComLY').value;
	let commissionSplitYC = document.getElementById('commissionSplitYC').value;
	let deskFeeYC = document.getElementById('deskFeeYC').value;
	let techFeeYC = document.getElementById('techFeeYC').value;
	let numTransLY = document.getElementById('numTransLY').value;
	let transFeeYC = document.getElementById('transFeeYC').value;
	let franFeeYC = document.getElementById('franFeeYC').value;
	let insurEOFeeYC = document.getElementById('insurEOFeeYC').value;

	let grossComLYLR = document.getElementById('grossComLY').value;
	let commissionSplitLR = document.getElementById('commissionSplitLR').value;
	let deskFeeLR = document.getElementById('deskFeeLR').value;
	let techFeeLR = document.getElementById('techFeeLR').value;
	let numTransLYLR = document.getElementById('numTransLY').value;
	let transFeeLR = document.getElementById('transFeeLR').value;
	let franFeeLR = document.getElementById('franFeeLR').value;
	let insurEOFeeLR = document.getElementById('insurEOFeeLR').value;

	// calculated variables
	let grossComSplitYC = grossComLY*commissionSplitYC/100;
	let grossComSplitLR = grossComLYLR*commissionSplitLR/100;
	let totTransFeeYC = numTransLY*transFeeYC*1;
	let totTransFeeLR = numTransLYLR*transFeeLR*1;
	let totFeesYC = (deskFeeYC*12)+(techFeeYC*12)+(totTransFeeYC*1)+
	(franFeeYC*12)+(numTransLY*insurEOFeeYC*1);
	let totFeesLR = (deskFeeLR*1)+(techFeeLR*12)+(totTransFeeLR*1)+
	(franFeeLR*12)+(numTransLY*insurEOFeeLR*1);
	let netComYC = grossComSplitYC-totTransFeeYC;
	let netComLR = grossComSplitLR-totFeesLR+totTransFeeLR;

	totalFeesYC.innerHTML = 'Total Fees: $ '+ (totFeesYC)
	totalFeesLR.innerHTML = 'Total Fees: $ '+ (totFeesLR)+'*'
	summarytotal.innerHTML = 'Summary:';
	otherIncome.innerHTML = 'Net Income With Your Company: $' + (netComYC);
	larosaIncome.innerHTML = 'Net Income With La Rosa North Florida: $' + (netComLR);
	incomeDifference.innerHTML = 'La Rosa Difference: $ ' + (netComLR-netComYC);
	noteLR.innerHTML = '*Transaction Fee at La Rosa North Florida is paid by the customer'
	});

