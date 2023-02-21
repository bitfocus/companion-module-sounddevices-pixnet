import { combineRgb } from '@companion-module/base'
import { Choices } from './setup.js'

/**
 * INTERNAL: initialize presets
 *
 * @private
 * @since 1.0.0
 */
export function updatePresets() {
	let presets = {}

	for (let i in Choices.KeyCode) {
		presets[Choices.KeyCode[i].label] = {
			type: 'button',
			category: 'Front Panel Buttons',
			name: Choices.KeyCode[i].label,
			style: {
				text: Choices.KeyCode[i].label,
				size: '18',
				color: combineRgb(255, 255, 255),
				bgcolor: 0,
			},
			steps: [
				{
					down: [
						{
							actionId: 'keyPress',
							options: {
								keyCode: Choices.KeyCode[i].id,
								keyEventType: 'KeyPress',
							},
						},
					],
					up: [
						{
							actionId: 'keyPress',
							options: {
								keyCode: Choices.KeyCode[i].id,
								keyEventType: 'KeyRelease',
							},
						},
					],
				},
			],
			feedbacks: [],
		}
	}

	this.setPresetDefinitions(presets)
}
