import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	vscode.window.showInformationMessage(
		// example of string w/ arguments
		vscode.l10n.t('Your extension got activated with the {0} language!', vscode.env.language)
	);

	let disposable = vscode.commands.registerCommand('extension.helloWorld', () => {
		vscode.window.showInformationMessage(vscode.l10n.t('Hello World from extension!'));
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
