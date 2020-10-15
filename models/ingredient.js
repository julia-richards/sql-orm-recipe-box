"use strict";
module.exports = (sequelize, DataTypes) => {
	const Ingredient = sequelize.define(
		"Ingredient",
		{
			amount: {
				type: DataTypes.NUMERIC,
				validate: {
					notNull: true,
				},
			},
			measurementUnitId: {
				type: DataTypes.INTEGER,
				validate: {
					notNull: true,
				},
			},
			foodStuff: {
				type: DataTypes.STRING,
				validate: {
					notEmpty: true,
				},
			},
			recipeId: {
				type: DataTypes.INTEGER,
				validate: {
					notNull: true,
				},
			},
		},
		{}
	);
	Ingredient.associate = function (models) {
		// associations can be defined here
		Ingredient.belongsTo(models.Recipe, { foreignKey: "recipeId" });
		Ingredient.belongsTo(models.MeasurementUnit, {
			foreignKey: "measurementUnitId",
		});
	};
	return Ingredient;
};
