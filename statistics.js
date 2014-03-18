function Statistics(){}

Statistics.getMean = function( numbers ) {
	var sum = 0;
	var mean = 0;
	for (var i = 0; i < numbers.length; i++) {
		sum += numbers[i];
	}

	mean = sum / numbers.length;

	return mean;
}

Statistics.getDiscrepancy = function( numbers ){
	var mean = Statistics.getMean(numbers);
	var discrepancy = 0;

	for (var i = 0; i < numbers.length; i++) {
		var number = numbers[i];

		discrepancy = discrepancy + (number - mean);
	}

	return discrepancy;
}

Statistics.getVariance = function( numbers ){
	var mean = Statistics.getMean(numbers);
	var variance = 0;
	var numberElements = numbers.length;

	for (var i = 0; i < numberElements; i++) {
		var discrepancy = 0;
		var number = numbers[i];

		discrepancy = number - mean;
		variance = variance + (Math.pow(discrepancy, 2) / numberElements);

	}

	return variance;
}

Statistics.getStandardDeviation = function( numbers ){
	var variance = Statistics.getVariance(numbers);
	var standardDeviation = Math.sqrt(variance);

	return standardDeviation;
};

Statistics.getCorrelationalDiscrepancy = function( numbersX, numbersY ){
	var xMean = Statistics.getMean(numbersX);
	var yMean = Statistics.getMean(numbersY);
	var total = 0;
	for (var i = 0; i < numbersX.length; i++) {
		var x = numbersX[i];
		var y = numbersY[i];
		var xDiscrepancy = x - xMean;
		var yDiscrepancy = y - yMean;
		total = total + xDiscrepancy * yDiscrepancy;
	}

	return total;
}

Statistics.getCorrelationalDeviation = function( numbers ){
	var mean = Statistics.getMean(numbers);
	var variance = 0;
	var standardDeviation = 0;

	for (var i = 0; i < numbers.length; i++) {
		var discrepancy = 0;
		var number = numbers[i];

		discrepancy = number - mean;
		variance = variance + Math.pow(discrepancy, 2);
	}

	standardDeviation = Math.sqrt(variance);

	return standardDeviation;
};

Statistics.getCorrelation = function(numbersX, numbersY){
	var xStandardDeviation = Statistics.getCorrelationalDeviation(numbersX);
	var yStandardDeviation = Statistics.getCorrelationalDeviation(numbersY);
	var correlationalDiscrepancy = Statistics.getCorrelationalDiscrepancy( numbersX, numbersY );
	var correlation = correlationalDiscrepancy / ( xStandardDeviation * yStandardDeviation );

	return Math.round(correlation);
};

var x = [0,1,2,3];
// var y = [1,3,5,7];
var y = [1,2,2,1];

var correlation = Statistics.getCorrelation( x, y );
console.log( 'correlation => ', correlation );

