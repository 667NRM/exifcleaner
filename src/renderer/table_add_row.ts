import path from "path";
import { selectedFilesList } from "./selected_files";

export function addTableRow({
	filePath,
}: {
	filePath: string;
}): HTMLTableRowElement {
	const label = path.basename(filePath);

	// tr node
	const trNode = document.createElement("tr");

	// td name node
	const tdNode = document.createElement("td");
	tdNode.setAttribute("title", label);
	trNode.appendChild(tdNode);

	// td icon
	const iconNode = document.createElement("i");
	iconNode.classList.add("icon", "icon-photo");
	tdNode.appendChild(iconNode);

	// td text
	var textSpanNode = document.createElement("span");
	textSpanNode.textContent = " " + label;
	textSpanNode.classList.add("file-path");
	tdNode.appendChild(textSpanNode);

	// td num exif before node
	const tdNumExifBeforeNode = document.createElement("td");
	// tdNumExifBeforeNode.setAttribute("align", "center")
	// spinner
	const tdNumExifBeforeSpinner = document.createElement("span");
	tdNumExifBeforeSpinner.classList.add("loading");
	tdNumExifBeforeNode.appendChild(tdNumExifBeforeSpinner);
	// append
	trNode.appendChild(tdNumExifBeforeNode);

	// td num exif after node
	const tdNumExifAfterNode = document.createElement("td");
	trNode.appendChild(tdNumExifAfterNode);

	// add tr to list
	const list = selectedFilesList();
	if (!list) {
		throw "Error while retrieving selected files list element";
	}
	list.appendChild(trNode);

	return trNode;
}
