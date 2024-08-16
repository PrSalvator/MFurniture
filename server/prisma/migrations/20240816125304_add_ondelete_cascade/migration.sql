-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_furniture_id_fkey";

-- DropForeignKey
ALTER TABLE "OrderOnShop" DROP CONSTRAINT "OrderOnShop_order_id_fkey";

-- DropForeignKey
ALTER TABLE "OrderOnShop" DROP CONSTRAINT "OrderOnShop_shop_id_fkey";

-- DropForeignKey
ALTER TABLE "Shop" DROP CONSTRAINT "Shop_director_id_fkey";

-- AddForeignKey
ALTER TABLE "Shop" ADD CONSTRAINT "Shop_director_id_fkey" FOREIGN KEY ("director_id") REFERENCES "Director"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_furniture_id_fkey" FOREIGN KEY ("furniture_id") REFERENCES "Furniture"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderOnShop" ADD CONSTRAINT "OrderOnShop_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderOnShop" ADD CONSTRAINT "OrderOnShop_shop_id_fkey" FOREIGN KEY ("shop_id") REFERENCES "Shop"("id") ON DELETE CASCADE ON UPDATE CASCADE;
