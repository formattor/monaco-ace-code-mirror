export default `
var first001 = {
	second001,
    second002,
	secondHasSub003 = {
        third001,
        third002,
		thirdHasSub003 = {
			fourth001,
			fourth002,
			fourth003,
		},
	},
	// subAttributeFun(first) {
	// 	class Cond {
    //         material003,
	// 		material004,
	// 		material005,
	// 		material006,
	// 	}
	// }
}
var test2 = {
	test001 : string,
    test002 : string,
}

var Distillation = {
	/**
	 * Materials\n
	 * Materials in distillation
	 */
	material: Compare,
    /**
	 * function\n
	 * @param {any} MaterialId
	 */
	getMaterialById(MaterialId) {},
	/**
	 * subAttribute\n
	 * @param  {any} first
	 * @return {Cond}
	 */
	subAttributeFun(first) {
		class Cond {
			/**
             * Materials001\n
             * Materials in distillation
             */
            material001: Compare,
            /**
             * Materials002\n
             * Materials in distillation
             */
            material002: Compare,
            material003,
			material004,
			material005,
			material006,
		}
	}
    /**
	 * subAttribute\n
	 */
	subAttribute {
		class Cond {
			/**
             * Materials001\n
             * Materials in distillation
             */
            material001: Compare,
            /**
             * Materials002\n
             * Materials in distillation
             */
            material002: Compare,
		}
        /**
         * Materials001\n
         * Materials in distillation
         */
        material001: Compare,
        /**
         * Materials002\n
         * Materials in distillation
         */
        material002: Compare,
	}
}
`