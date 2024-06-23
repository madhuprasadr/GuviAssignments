class UberPriceCalculator {
    constructor(baseFarePerKm, farePerMinute, surgeMultiplier = 1.0) {
        this.baseFarePerKm = baseFarePerKm;
        this.farePerMinute = farePerMinute;
        this.surgeMultiplier = surgeMultiplier;
    }

    calculateFare(distanceInKm, durationInMinutes) {
          let fare = this.baseFarePerKm * distanceInKm;
          fare += this.farePerMinute * durationInMinutes;
          fare *= this.surgeMultiplier;
          return fare;
    }
}

// Example usage:
const calculator = new UberPriceCalculator(1.5, 0.2, 1.2); // Base fare: $1.5 per km, $0.2 per minute, Surge multiplier: 1.2

// Calculate fare for a trip of 10 km and 15 minutes duration
const distance = 10; // kilometers
const duration = 15; // minutes

const fare = calculator.calculateFare(distance, duration);
console.log(`Estimated fare: $${fare.toFixed(2)}`);