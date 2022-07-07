// License: LGPL-3.0-or-later
// this will be generated by some route generator in future but for now, we'll handcode it.

export default {
	profile: {
		path: (props: { id: string }): string => {
			return `/profiles/${props.id}`;
		},

		url: (props: { id: string }): string => {
			return `/profiles/${props.id}`;
		},
	},
};