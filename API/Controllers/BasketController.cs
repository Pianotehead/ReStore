using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace API.Controllers
{
    [Route("[controller]")]
    public class BasketController : BaseApiController
    {
        private readonly StoreContext _context;

        public BasketController(StoreContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<Basket>> GetBasket()
        {
            var basket = await _context.Baskets
                .Include(i => i.Items)
                .ThenInclude(p => p.Product)
                .FirstOrDefaultAsync(x => x.BuyerId == Request.Cookies["buyerId"]);

            if (basket == null) return NotFound();
            return basket;
        }

        [HttpPost]
        public async Task<ActionResult> AddItemToBasket(int productId, int quantity)
        {
            // 1)   Get basket (or create if does not exist)
            // 2)   Get product
            // 3)   Add item
            // 4)   Save Changes

            return StatusCode(201);
        }

        [HttpDelete]
        public async Task<ActionResult> RemoveBasketItem(int productId, int quantity)
        {
            // 1)   Get basket
            // 2)   If basket not null => remove item or reduce quantity
            // 3)   Save Changes
            return Ok();
        }


    }
}