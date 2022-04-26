import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptLabelMarquee } from '@demo/shared';
import { } from '@robernator/nativescript-label-marquee';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptLabelMarquee {
	labelizeEnabled = true;
}
