import "jest";
import { formatCompletionTime } from "../../utils/index";

describe("Utils: formatCompletionTime", () => {
	it("should return the correct output for seconds (SS secs)", () => {
		const timeInMillis = 1000;
		const result = formatCompletionTime(timeInMillis);

		expect(result).toBe("01sec");
	});

	it("should return the correct output for minutes (MM:SS mins)", () => {
		const timeInMillis = 300000;
		const result = formatCompletionTime(timeInMillis);

		expect(result).toBe("05:00mins");
	});
});
