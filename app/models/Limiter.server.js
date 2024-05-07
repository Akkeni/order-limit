import exp from 'constants';
import db from '../db.server';

export async function updateLimiter(formData, allProductsData) {
    const result = {};
    try {

        //const formData = await request.formData();

        //to delete a record from a database
        console.log(formData.get('action', formData.get('pk')));

        //to update records in database
        if (formData.get('action') === 'update') {
            if (formData.get('choice') === 'Product Wise') {

                const orderLimit = await db.order_Limit.findFirst({
                    where: {
                        typeId: formData.get('id'),
                    }
                });

                if (orderLimit !== null && Number(formData.get('pk')) != orderLimit.id) {
                    result.exist = true;
                    return result;
                }

                const updateLimiter = await db.order_Limit.update({
                    where: {
                        id: Number(formData.get('pk')),
                    },
                    data: {
                        type: 'product_wise',
                        typeId: formData.get('id'),
                        status: formData.get('status'),
                        quantityLimit: Number(formData.get('quantityLimit')),
                    },
                });
            } else if (formData.get('choice') === 'Category Wise') {

                const orderLimit = await db.order_Limit.findFirst({
                    where: {
                        typeId: formData.get('id'),
                    }
                });

                if (orderLimit !== null && Number(formData.get('pk')) != orderLimit.id) {
                    result.exist = true;
                    return result;
                }

                const updateLimiter = await db.order_Limit.update({
                    where: {
                        id: Number(formData.get('pk')),
                    },
                    data: {
                        type: 'category_wise',
                        typeId: formData.get('id'),
                        status: formData.get('status'),
                        quantityLimit: Number(formData.get('quantityLimit')),
                    },
                });
            } else if (formData.get('choice') === 'Store Wise') {

                const orderLimit = await db.order_Limit.findFirst({
                    where: {
                        type: 'store_wise',
                    },
                });

                if (orderLimit !== null && Number(formData.get('pk')) != orderLimit.id) {
                    result.exist = true;
                    return result;
                }

                //const quantityLimit = allProductsData.data.products.edges.length;
                const updateLimiter = await db.order_Limit.update({
                    where: {
                        id: Number(formData.get('pk')),
                    },
                    data: {
                        type: 'store_wise',
                        status: formData.get('status'),
                        quantityLimit:  Number(formData.get('quantityLimit')),
                    },
                });
            }
            result.updated = true;
            return result;
        }

    } catch (error) {
        console.error('Error storing records:', error);
        result.ok = false;
        result.error = error;
        return result;
    }
}

export async function addLimiter( formData, allProductsData) {
    //to add new records to database
    const result = {};
    try {
        if (formData.get('action') === 'create') {
            if (formData.get('choice') === 'Store Wise') {

                const orderLimit = await db.order_Limit.findFirst({
                    where: {
                        type: 'store_wise',
                    },
                });

                if (orderLimit !== null) {
                    result.exist = true;
                    return result;
                }

                //const quantityLimit = allProductsData.data.products.edges.length;

                const data = {
                    type: 'store_wise',
                    status: formData.get('status'),
                    quantityLimit: Number(formData.get('quantityLimit')),
                };

                await db.order_Limit.create({ data });
            }

            else if (formData.get('choice') === 'Product Wise') {

                const orderLimit = await db.order_Limit.findFirst({
                    where: {
                        typeId: formData.get('id'),
                    }
                });

                if (orderLimit !== null) {
                    result.exist = true;
                    return result;
                }

                const data = {
                    type: 'product_wise',
                    typeId: formData.get('id'),
                    status: formData.get('status'),
                    quantityLimit: Number(formData.get('quantityLimit')),
                }
                await db.order_Limit.create({ data });
            }

            else if (formData.get('choice') === 'Category Wise') {

                const orderLimit = await db.order_Limit.findFirst({
                    where: {
                        typeId: formData.get('id'),
                    }
                });

                if (orderLimit !== null) {
                    result.exist = true;
                    return result;
                }

                const data = {
                    type: 'category_wise',
                    typeId: formData.get('id'),
                    status: formData.get('status'),
                    quantityLimit: Number(formData.get('quantityLimit')),
                };

                await db.order_Limit.create({ data });
            }
            result.created = true;
            return result;
        }
    } catch (error) {
        console.error('Error storing records:', error);
        result.ok = false;
        result.error = error;
        return result;
    }
}



