import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	// https://code.visualstudio.com/api/references/vscode-api#l10n
	// `bundle` and `uri` will be `Undefined`
	// if there was no bundle found or when we are running with the default language
	console.log(vscode.l10n.uri); // URI of the localization bundle
	console.log(vscode.l10n.bundle);
	console.log(vscode.l10n.bundle?.['Hello World from extension!']);

	vscode.window.showInformationMessage(
		// example of string w/ arguments
		vscode.l10n.t('Your extension got activated with the {0} language!', vscode.env.language)
	);

	let disposable = vscode.commands.registerCommand('extension.helloWorld', () => {
		// vscode.window.showInformationMessage(vscode.l10n.t('Hello World from extension!'));

		const panel = vscode.window.createWebviewPanel(
			'catCoding', // Identifies the type of the webview. Used internally
			'Cat Coding', // Title of the panel displayed to the user
			vscode.ViewColumn.One, // Editor column to show the new webview panel in.
			{} // Webview options. More on these later.
		);

		panel.webview.html = getWebviewContent();
	});

	context.subscriptions.push(disposable);
}

function getWebviewContent() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cat Coding</title>
</head>
<body>
		<h1>${vscode.l10n.t('Hello World from extension!')}</h1>
		<h2>${vscode.l10n.t('Your extension got activated with the {0} language!', vscode.env.language)}</h2>
    <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" width="300" />
</body>
</html>`;
}

export function deactivate() {}
