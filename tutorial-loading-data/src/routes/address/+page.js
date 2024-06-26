export const load = async (loadEvent) => {
    console.log("Load function called in address/page.js")
	const { fetch } = loadEvent;
	const response = await fetch('/api/postcodes');
	const postcodes = await response.json();
	const addressList = postcodes.map((postcode) => {
		return `${postcode.buildingName}, ${postcode.line1} ,${postcode.line2}, ${postcode.line3}, ${postcode.country}, ${postcode.postcode}`;
	});
	return { addressList };
};